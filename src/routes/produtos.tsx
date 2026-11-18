import { createFileRoute, Link } from "@tanstack/react-router";
import { Bike, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { IFOOD, WHATSAPP } from "@/lib/site";
import p2 from "@/assets/galeria-2.jpg.asset.json";
import p4 from "@/assets/galeria-4.jpg.asset.json";
import p5 from "@/assets/galeria-5.jpg.asset.json";
import p8 from "@/assets/galeria-8.jpg.asset.json";
import p9 from "@/assets/galeria-9.jpg.asset.json";
import g3 from "@/assets/ig-3.jpg.asset.json";

const ITEMS = [
  {
    img: p8.url,
    alt: "Casquinha de pistache na frente do letreiro da loja",
    t: "Casquinha",
    d: "Casquinha crocante com as bolas de gelato que você escolher.",
  },
  {
    img: p2.url,
    alt: "Copinho de gelato sobre a mesa da gelateria",
    t: "Copinho",
    d: "Copinho com gelato, para comer na hora ou levar.",
  },
  {
    img: p9.url,
    alt: "Banana split com chantilly e frutas vermelhas",
    t: "Banana split",
    d: "Banana, gelato, chantilly e frutas vermelhas.",
  },
  {
    img: p5.url,
    alt: "Petit gâteau com gelato e calda de chocolate",
    t: "Petit gâteau",
    d: "Bolo de chocolate com recheio cremoso servido nosso gelato e calda de chocolate.",
  },
  {
    img: g3.url,
    alt: "Cappuccino com brownie e gelato",
    t: "Cappuccino com gelato",
    d: "Cappuccino com brownie e uma bola de gelato.",
  },
  {
    img: p4.url,
    alt: "Taça de gelato com confeitos",
    t: "Taça de gelato",
    d: "Taça de gelato com confeitos e calda.",
  },
];

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — Monte Civetta Gelateria" },
      {
        name: "description",
        content:
          "Casquinha, copinho, banana split, petit gâteau, cappuccino e taça na Monte Civetta, em Canasvieiras, Florianópolis.",
      },
      { property: "og:title", content: "Produtos — Monte Civetta Gelateria" },
      {
        property: "og:description",
        content: "Casquinha, copinho, banana split, petit gâteau e mais.",
      },
    ],
  }),
  component: Produtos,
});

function Produtos() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pt-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-caramel">La casa del gelato</p>
        <h1 className="mt-3 font-serif text-5xl text-cocoa md:text-6xl">Produtos</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          O que servimos na casa. Os sabores estão na página de sabores.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((i) => (
            <article key={i.t} className="overflow-hidden rounded-3xl border border-cocoa/15 bg-card">
              <img src={i.img} alt={i.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h2 className="font-serif text-3xl text-cocoa">{i.t}</h2>
                <p className="mt-2 text-muted-foreground">{i.d}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Ainda não publicamos a tabela de preços aqui — fale com a gente pelo WhatsApp para conferir
          os valores.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20 text-center">
        <h2 className="font-serif text-4xl text-cocoa">Vem provar</h2>
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
          <Link to="/sabores" className="text-caramel underline underline-offset-4">
            Ver os sabores
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
