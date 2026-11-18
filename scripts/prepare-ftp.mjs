import { cp, mkdir, mkdtemp, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const STATIC_ROUTES = ["/", "/produtos", "/sabores", "/galeria", "/localizacao", "/entrega", "/fale-conosco"];

export async function prepareFtp({ projectRoot = root, fetchAsset = fetch } = {}) {
  let source;
  for (const candidate of ["dist/client", ".output/public"]) {
    const directory = join(projectRoot, candidate);
    try {
      for (const route of STATIC_ROUTES) {
        await stat(join(directory, route.slice(1), "index.html"));
      }
      source = directory;
      break;
    } catch {
      // An incomplete or old build must never be exported.
    }
  }
  if (!source) throw new Error("As sete páginas HTML não foram geradas. Execute npm run build:ftp para gerar o site completo.");

  const target = join(projectRoot, "dist/ftp");
  const temporary = await mkdtemp(join(tmpdir(), "monte-civetta-ftp-"));
  try {
    await rm(target, { recursive: true, force: true });
    await cp(source, target, { recursive: true, filter: (path) => !path.split(/[\\/]/).includes(".lovable") });
    const assetsDirectory = join(projectRoot, "src/assets");
    for (const filename of await readdir(assetsDirectory)) {
      if (!filename.endsWith(".asset.json")) continue;
      const asset = JSON.parse(await readFile(join(assetsDirectory, filename), "utf8"));
      if (typeof asset.url !== "string" || !asset.url.startsWith("/__l5e/assets-v1/") || asset.url.includes("..")) {
        throw new Error(`Endereço de foto inválido: ${filename}`);
      }
      const response = await fetchAsset(new URL(asset.url, "https://monte-civetta.lovable.app"));
      if (!response.ok) throw new Error(`Não foi possível baixar ${filename}: HTTP ${response.status}`);
      const bytes = Buffer.from(await response.arrayBuffer());
      if (bytes.length === 0 || (asset.size && bytes.length !== asset.size)) {
        throw new Error(`Foto incompleta: ${filename}`);
      }
      const downloaded = join(temporary, filename.replace(/\.asset\.json$/, ""));
      await writeFile(downloaded, bytes);
      const destination = join(target, asset.url.slice(1));
      await mkdir(dirname(destination), { recursive: true });
      await cp(downloaded, destination);
    }
    await cp(join(projectRoot, "hosting/apache.htaccess"), join(target, ".htaccess"));
    console.log("Site preparado em dist/ftp. Envie TODO o conteúdo dessa pasta, incluindo .htaccess, para a raiz pública do domínio.");
    return target;
  } catch (error) {
    await rm(target, { recursive: true, force: true });
    throw error;
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await prepareFtp();
}