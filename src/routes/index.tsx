import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, Bike, Link2 } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import poster from "@/assets/poster.png.asset.json";

const IFOOD =
  "https://www.ifood.com.br/delivery/florianopolis-sc/monte-civetta-gelateria-canasvieiras/47cab871-7828-4ad0-8a83-d783adf0df75";
const INSTAGRAM = "https://www.instagram.com/montecivettagelateria";
const LINKTREE = "https://linktr.ee/montecivettagelateria";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Monte Civetta Gelateria — La Casa del Gelato em Canasvieiras" },
      {
        name: "description",
        content:
          "Gelato artesanal italiano em Canasvieiras, Florianópolis. Aberto das 13h às 20h. Peça pelo iFood.",
      },
      { property: "og:title", content: "Monte Civetta Gelateria — La Casa del Gelato" },
      {
        property: "og:description",
        content: "Gelato artesanal em Canasvieiras, Florianópolis. Das 13h às 20h.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <img src={logo.url} alt="Monte Civetta" className="h-14 w-auto mix-blend-multiply" />
        <a
          href={IFOOD}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Pedir no iFood
        </a>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-12 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-caramel">La casa del gelato</p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-cocoa md:text-7xl">
            Gelato artesanal, <em className="text-caramel">feito com carinho</em> em Canasvieiras.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Sabores cremosos no estilo italiano, preparados todos os dias para adoçar o seu verão
            em Florianópolis.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-cocoa/40 px-6 py-3">
            <Clock className="h-5 w-5 text-cocoa" />
            <span>
              Estamos abertos <strong className="text-cocoa">das 13h às 20h</strong>
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={IFOOD} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90">
              <Bike className="h-5 w-5" /> Delivery iFood
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-medium text-secondary-foreground hover:bg-muted">
              <Instagram className="h-5 w-5" /> Instagram
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -rotate-3 rounded-[2rem] bg-secondary" />
          <img
            src={poster.url}
            alt="Copinho com bolas de gelato de morango, chocolate e creme"
            className="relative mx-auto max-h-[640px] rounded-[2rem] shadow-2xl"
          />
        </div>
      </section>

      <section className="bg-cocoa py-20 text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
          {[
            { icon: MapPin, t: "Onde estamos", d: "Canasvieiras, Florianópolis — SC" },
            { icon: Clock, t: "Horário", d: "Todos os dias, das 13h às 20h" },
            { icon: Bike, t: "Delivery", d: "Receba em casa pelo iFood" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t}>
              <Icon className="h-8 w-8 text-caramel" />
              <h2 className="mt-4 font-serif text-3xl">{t}</h2>
              <p className="mt-2 opacity-80">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="font-serif text-5xl text-cocoa">Vem tomar um gelato!</h2>
        <p className="mt-4 text-muted-foreground">Acompanhe novidades e sabores do dia nas nossas redes.</p>
        <div className="mt-8 flex flex-col items-center gap-3">
          {[
            { href: IFOOD, label: "Pedir pelo iFood", icon: Bike },
            { href: INSTAGRAM, label: "@montecivettagelateria", icon: Instagram },
            { href: LINKTREE, label: "Todos os nossos links", icon: Link2 },
          ].map(({ href, label, icon: Icon }) => (
            <a key={href} href={href} target="_blank" rel="noreferrer" className="flex w-full max-w-sm items-center justify-center gap-2 rounded-full border border-cocoa/30 px-6 py-3 transition hover:bg-cocoa hover:text-cream">
              <Icon className="h-5 w-5" /> {label}
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Monte Civetta Gelateria · La Casa del Gelato
      </footer>
    </main>
  );
}
