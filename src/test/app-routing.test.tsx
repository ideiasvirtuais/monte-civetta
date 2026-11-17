import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { WHATSAPP_CONTACT } from "@/lib/site";
import { filterFlavors, FLAVORS } from "@/routes/sabores";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches a page for /sabores instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/sabores");

    expect(matches.at(-1)?.routeId).toBe("/sabores");
  });
});

describe("Flavor list", () => {
  it("lists the 55 flavors from the shop's list, none repeated", () => {
    expect(FLAVORS).toHaveLength(55);
    expect(new Set(FLAVORS.map((f) => f.name.toLowerCase())).size).toBe(55);
  });

  it("finds the diet flavors when someone types 'dieta'", () => {
    expect(filterFlavors("dieta").map((f) => f.name)).toEqual([
      "Coco diet",
      "Chocolate diet",
      "Iogurte com mirtilo diet",
    ]);
  });

  it("finds the vegan flavor when someone types 'vegana'", () => {
    expect(filterFlavors("vegana").map((f) => f.name)).toEqual(["Chocolate vegano"]);
  });

  it("shows every flavor when the search box is empty", () => {
    expect(filterFlavors("")).toHaveLength(55);
    expect(filterFlavors("   ")).toHaveLength(55);
  });
});

describe("Floating WhatsApp button", () => {
  it("opens the shop's number with the question pre-filled", () => {
    expect(WHATSAPP_CONTACT).toBe(
      "https://wa.me/5548991235390?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida.",
    );
  });
});
