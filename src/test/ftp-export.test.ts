import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
// @ts-expect-error The standalone Node export script is intentionally JavaScript.
import { prepareFtp, STATIC_ROUTES } from "../../scripts/prepare-ftp.mjs";

const directories: string[] = [];
afterEach(async () => {
  await Promise.all(directories.map((directory) => rm(directory, { recursive: true, force: true })));
  directories.length = 0;
});

async function fixture() {
  const root = await mkdtemp(join(tmpdir(), "ftp-export-test-"));
  directories.push(root);
  for (const route of STATIC_ROUTES as string[]) {
    const directory = join(root, "dist/client", route.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, "index.html"), `<h1>${route}</h1>`);
  }
  await mkdir(join(root, "hosting"));
  await writeFile(join(root, "hosting/apache.htaccess"), "DirectoryIndex index.html");
  await mkdir(join(root, "src/assets"), { recursive: true });
  await writeFile(join(root, "src/assets/photo.jpg.asset.json"), JSON.stringify({
    url: "/__l5e/assets-v1/test/photo.jpg", size: 5,
  }));
  return root;
}

describe("FTP static export", () => {
  it("includes all seven pages and serves photos locally on the custom domain", async () => {
    const root = await fixture();
    const target = await prepareFtp({ projectRoot: root, fetchAsset: async () => new Response("photo") });
    expect(STATIC_ROUTES).toEqual(["/", "/produtos", "/sabores", "/galeria", "/localizacao", "/entrega", "/fale-conosco"]);
    for (const route of STATIC_ROUTES as string[]) {
      expect(await readFile(join(target, route.slice(1), "index.html"), "utf8")).toBe(`<h1>${route}</h1>`);
    }
    expect(await readFile(join(target, "__l5e/assets-v1/test/photo.jpg"), "utf8")).toBe("photo");
    expect(await readFile(join(target, ".htaccess"), "utf8")).toBe("DirectoryIndex index.html");
  });

  it("rejects a build missing a public page", async () => {
    const root = await fixture();
    await rm(join(root, "dist/client/galeria/index.html"));
    await expect(prepareFtp({ projectRoot: root })).rejects.toThrow("sete páginas HTML");
  });

  it("removes an incomplete export when a photo download fails", async () => {
    const root = await fixture();
    await expect(prepareFtp({ projectRoot: root, fetchAsset: async () => new Response("", { status: 404 }) })).rejects.toThrow("HTTP 404");
    await expect(readFile(join(root, "dist/ftp/index.html"))).rejects.toThrow();
  });
});