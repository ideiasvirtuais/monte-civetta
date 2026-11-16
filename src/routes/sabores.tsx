import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Bike, Phone, Search } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

const IFOOD =
  "https://www.ifood.com.br/delivery/florianopolis-sc/monte-civetta-gelateria-canasvieiras/47cab871-7828-4ad0-8a83-d783adf0df75";
const WHATSAPP = "https://wa.me/5548991235390";

type Flavor = { name: string; tag?: "vegano" | "diet" };

export const FLAVORS: Flavor[] = [
  { name: "Frutas vermelhas" },
  { name: "Snickers" },
  { name: "Abacaxi" },
  { name: "Açaí" },
  { name: "Acerola" },
  { name: "Ameixa preta" },
  { name: "Amendoim" },
  { name: "Avelã" },
  { name: "Banana caramelizada" },
  { name: "Brigadeiro" },
  { name: "Bacio/Perugino" },
  { name: "Butiá" },
  { name: "Caramelo salgado" },
  { name: "Cheesecake" },
  { name: "Chocolate vegano", tag: "vegano" },
  { name: "Chocolate" },
  { name: "Chocolate amargo" },
  { name: "Chocolate com laranja" },
  { name: "Coco" },
  { name: "Creme de baunilha" },
  { name: "Cupuaçu" },
  { name: "Doce de leite" },
  { name: "Flocos" },
  { name: "Floresta negra" },
  { name: "Gengibríssimo" },
  { name: "Goiaba" },
  { name: "Graviola" },
  { name: "Iogurte damasco" },
  { name: "Iogurte com mirtilo" },
  { name: "Jabuticaba" },
  { name: "Kinder" },
  { name: "Kiwi" },
  { name: "Leite condensado" },
  { name: "Limão" },
  { name: "Limão com manjericão" },
  { name: "Maracujá" },
  { name: "Melancia" },
  { name: "Menta verde" },
  { name: "M.I.C (morango, iogurte e chocolate)" },
  { name: "Milho" },
  { name: "Monte Civetta" },
  { name: "Morango" },
  { name: "Passas ao rum" },
  { name: "Paixão de verão" },
  { name: "Pistache" },
  { name: "Pitaia" },
  { name: "Pitanga" },
  { name: "Rocher" },
  { name: "Tiramisù" },
  { name: "Torta de limão" },
  { name: "Raffaello" },
  { name: "Uva" },
  { name: "Coco diet", tag: "diet" },
  { name: "Chocolate diet", tag: "diet" },
  { name: "Iogurte com mirtilo diet", tag: "diet" },
];

const norm = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

// Someone searching "dieta" or "vegana" should land on the tagged flavors.
const TAG_SYNONYMS: Record<string, string> = {
  dieta: "diet",
  diet: "diet",
  vegana: "vegano",
  vegano: "vegano",
  vegan: "vegano",
};

export function filterFlavors(q: string): Flavor[] {
  const needle = norm(q.trim());
  if (!needle) return FLAVORS;
  const wantedTag = TAG_SYNONYMS[needle];
  return FLAVORS.filter(
    (f) =>
      norm(f.name).includes(needle) ||
      (f.tag && (needle.includes(f.tag) || f.tag.includes(needle) || f.tag === wantedTag)),
  );
}

export const Route = createFileRoute("/sabores")({
  head: () => ({
    meta: [
      { title: "Sabores — Monte Civetta Gelateria" },
      {
        name: "description",
        content:
          "Os sabores da Monte Civetta em Canasvieiras: frutas vermelhas, pistache, tiramisù, opções diet e vegana. Peça pelo iFood.",
      },
      { property: "og:title", content: "Sabores — Monte Civetta Gelateria" },
      {
        property: "og:description",
        content: "Frutas vermelhas, pistache, tiramisù, opções diet e vegana. Venha escolher o seu.",
      },
    ],
  }),
  component: Sabores,
});

function Sabores() {
  const [q, setQ] = useState("");
  const list = useMemo(() => filterFlavors(q), [q]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-3 px-6 py-5">
        <Link to="/">
          <img src={logo.url} alt="Monte Civetta" className="h-24 w-auto mix-blend-multiply md:h-32" />
        </Link>
        <div className="flex flex-wrap items-center justify-end gap-2 md:gap-3">
          <Link to="/galeria" className="rounded-full bg-secondary px-4 py-2 text-xs font-medium text-secondary-foreground hover:bg-muted md:px-5 md:text-sm">
            Galeria
          </Link>
          <Link to="/" className="rounded-full bg-secondary px-4 py-2 text-xs font-medium text-secondary-foreground hover:bg-muted md:px-5 md:text-sm">
            ← Início
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-caramel">Mais de 60 sabores</p>
        <h1 className="mt-3 font-serif text-5xl text-cocoa md:text-6xl">Nossos sabores</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          São {FLAVORS.length} sabores da nossa lista, preparados todos os dias na casa. Busque o seu
          ou passeie pela lista inteira.
        </p>

        <div className="mx-auto mt-8 flex max-w-md items-center gap-3 rounded-full border border-cocoa/30 bg-card px-5 py-3">
          <Search className="h-5 w-5 shrink-0 text-caramel" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar sabor..."
            aria-label="Buscar sabor"
            className="w-full bg-transparent text-cocoa outline-none placeholder:text-muted-foreground"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10 pt-10">
        {list.length === 0 ? (
          <p className="py-16 text-center text-muted-foreground">
            Nenhum sabor com esse nome. Tente outra palavra.
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((f) => (
              <li
                key={f.name}
                className="flex items-center justify-between gap-3 rounded-2xl border border-cocoa/15 bg-card px-5 py-4"
              >
                <span className="font-serif text-2xl text-cocoa">{f.name}</span>
                {f.tag && (
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs uppercase tracking-wider text-secondary-foreground">
                    {f.tag}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          {list.length} {list.length === 1 ? "sabor" : "sabores"}
          {q ? " com esse nome" : " na lista"} · temos opções diet e veganas
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20 text-center">
        <h2 className="font-serif text-4xl text-cocoa">Escolheu o seu?</h2>
        <div className="mt-6 flex flex-col items-center gap-3">
          <a
            href={IFOOD}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90"
          >
            <Bike className="h-5 w-5" /> Pedir pelo iFood
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full border border-cocoa/30 px-6 py-3 transition hover:bg-cocoa hover:text-cream"
          >
            <Phone className="h-5 w-5" /> WhatsApp (48) 99123-5390
          </a>
        </div>
      </section>

      <footer className="border-t py-10 text-center text-sm text-muted-foreground">
        <img src={logo.url} alt="Monte Civetta" className="mx-auto mb-4 h-32 w-auto mix-blend-multiply md:h-40" />
        © {new Date().getFullYear()} Monte Civetta Gelateria · La Casa del Gelato
      </footer>
    </main>
  );
}
