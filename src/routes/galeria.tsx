import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import p1 from "@/assets/galeria-1.jpg.asset.json";
import p2 from "@/assets/galeria-2.jpg.asset.json";
import p3 from "@/assets/galeria-3.jpg.asset.json";
import p4 from "@/assets/galeria-4.jpg.asset.json";
import p5 from "@/assets/galeria-5.jpg.asset.json";
import p6 from "@/assets/galeria-6.jpg.asset.json";
import p7 from "@/assets/galeria-7.jpg.asset.json";
import p8 from "@/assets/galeria-8.jpg.asset.json";
import p9 from "@/assets/galeria-9.jpg.asset.json";
import p10 from "@/assets/galeria-10.jpg.asset.json";
import g3 from "@/assets/ig-3.jpg.asset.json";
import g9 from "@/assets/ig-9.jpg.asset.json";

const PHOTOS = [
  { src: p1.url, alt: "Vitrine colorida de gelatos" },
  { src: p3.url, alt: "Casquinha com calda de chocolate" },
  { src: p4.url, alt: "Taça de gelato com confeitos e guarda-chuvinhas" },
  { src: p2.url, alt: "Copinho de gelato na mesa da gelateria" },
  { src: p5.url, alt: "Brownie com gelato e calda de chocolate" },
  { src: p6.url, alt: "Cliente sorrindo com brownie e gelato" },
  { src: p7.url, alt: "Casquinha de gelato dentro da loja" },
  { src: p8.url, alt: "Casquinha de pistache em frente ao letreiro" },
  { src: p9.url, alt: "Banana split com chantilly e frutas vermelhas" },
  { src: g3.url, alt: "Cappuccino com brownie e gelato" },
  { src: p10.url, alt: "Vitrine de sabores da Monte Civetta" },
  { src: g9.url, alt: "Fachada e jardim da gelateria" },
];

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria de fotos — Monte Civetta Gelateria" },
      { name: "description", content: "Fotos dos gelatos, sobremesas e do espaço da Monte Civetta em Canasvieiras, Florianópolis." },
      { property: "og:title", content: "Galeria de fotos — Monte Civetta Gelateria" },
      { property: "og:description", content: "Gelatos, sobremesas e o nosso cantinho em Canasvieiras." },
    ],
  }),
  component: Galeria,
});

function Galeria() {
  const [open, setOpen] = useState<number | null>(null);
  const go = (d: number) => setOpen((i) => (i === null ? i : (i + d + PHOTOS.length) % PHOTOS.length));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/"><img src={logo.url} alt="Monte Civetta" className="h-24 w-auto mix-blend-multiply md:h-32" /></Link>
        <Link to="/" className="rounded-full bg-secondary px-5 py-2 text-sm font-medium text-secondary-foreground hover:bg-muted">← Início</Link>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-6">
        <p className="text-center text-sm uppercase tracking-[0.3em] text-caramel">La casa del gelato</p>
        <h1 className="mt-3 text-center font-serif text-5xl text-cocoa md:text-6xl">Galeria de fotos</h1>
        <div className="mt-12 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {PHOTOS.map((p, i) => (
            <button key={p.src} onClick={() => setOpen(i)} className="group block w-full overflow-hidden rounded-2xl">
              <img src={p.src} alt={p.alt} loading="lazy" className="w-full transition duration-500 group-hover:scale-105" />
            </button>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="https://www.instagram.com/montecivettagelateria" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90">
            <Instagram className="h-5 w-5" /> Veja mais no Instagram
          </a>
        </div>
      </section>

      {open !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-cocoa/95 p-4" onClick={() => setOpen(null)}>
          <button aria-label="Fechar" className="absolute right-4 top-4 text-cream"><X className="h-8 w-8" /></button>
          <button aria-label="Anterior" onClick={(e) => { e.stopPropagation(); go(-1); }} className="absolute left-2 text-cream md:left-6"><ChevronLeft className="h-10 w-10" /></button>
          <img src={PHOTOS[open]!.src} alt={PHOTOS[open]!.alt} className="max-h-[90vh] max-w-full rounded-xl" onClick={(e) => e.stopPropagation()} />
          <button aria-label="Próxima" onClick={(e) => { e.stopPropagation(); go(1); }} className="absolute right-2 text-cream md:right-6"><ChevronRight className="h-10 w-10" /></button>
        </div>
      )}
    </main>
  );
}
