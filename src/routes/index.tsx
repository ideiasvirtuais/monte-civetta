import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, Bike, Link2, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ADDRESS, HOURS, IFOOD, INSTAGRAM, LINKTREE, MAP_URL, PHONE, WHATSAPP } from "@/lib/site";
import poster from "@/assets/poster.png.asset.json";
import g10 from "@/assets/ig-10.jpg.asset.json";
import g11 from "@/assets/ig-11.jpg.asset.json";
import g12 from "@/assets/ig-12.jpg.asset.json";
import g3 from "@/assets/ig-3.jpg.asset.json";
import g6 from "@/assets/ig-6.jpg.asset.json";
import g7 from "@/assets/ig-7.jpg.asset.json";
import g8 from "@/assets/ig-8.jpg.asset.json";
import g9 from "@/assets/ig-9.jpg.asset.json";

const GALLERY = [
  { src: g10.url, alt: "Cliente segurando casquinha de gelato de pistache" },
  { src: g12.url, alt: "Vitrine de gelatos da Monte Civetta em Canasvieiras" },
  { src: g7.url, alt: "Banana split com gelato e calda de frutas vermelhas" },
  { src: g3.url, alt: "Cappuccino com brownie e gelato" },
  { src: g6.url, alt: "Casquinha de gelato dentro da loja" },
  { src: g8.url, alt: "Brownie com gelato servido na bandeja" },
  { src: g11.url, alt: "Cliente saboreando uma casquinha" },
  { src: g9.url, alt: "Fachada e jardim da gelateria" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Monte Civetta Gelateria — La Casa del Gelato em Canasvieiras" },
      {
        name: "description",
        content:
          "Gelato artesanal em Canasvieiras, Florianópolis. R. Des. Maurílio Coimbra, 95. Ter–Dom a partir das 13h. Peça pelo iFood.",
      },
      { property: "og:title", content: "Monte Civetta Gelateria — La Casa del Gelato" },
      {
        property: "og:description",
        content: "Gelato artesanal em Canasvieiras, Florianópolis. Ter–Dom a partir das 13h.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

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
              Terça a domingo, <strong className="text-cocoa">a partir das 13h</strong>
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
            { icon: MapPin, t: "Onde estamos", d: ADDRESS, href: MAP_URL },
            { icon: Phone, t: "Fale conosco", d: PHONE, href: WHATSAPP },
          ].map(({ icon: Icon, t, d, href }) => (
            <a key={t} href={href} target="_blank" rel="noreferrer" className="block hover:opacity-90">
              <Icon className="h-8 w-8 text-caramel" />
              <h2 className="mt-4 font-serif text-3xl">{t}</h2>
              <p className="mt-2 opacity-80">{d}</p>
            </a>
          ))}
          <div>
            <Clock className="h-8 w-8 text-caramel" />
            <h2 className="mt-4 font-serif text-3xl">Horário</h2>
            <ul className="mt-2 space-y-1 opacity-80">
              {HOURS.map(([d, h]) => (
                <li key={d} className="flex justify-between gap-4"><span>{d}</span><span className="font-medium">{h}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-center text-sm uppercase tracking-[0.3em] text-caramel">Direto do nosso Instagram</p>
        <h2 className="mt-3 text-center font-serif text-5xl text-cocoa">Momentos Monte Civetta</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY.map((g) => (
            <a key={g.src} href={INSTAGRAM} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-2xl">
              <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105" />
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/galeria" className="inline-flex rounded-full border border-cocoa/30 px-6 py-3 hover:bg-cocoa hover:text-cream">Ver galeria completa</Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20 text-center">
        <h2 className="font-serif text-5xl text-cocoa">Vem tomar um gelato!</h2>
        <p className="mt-4 text-muted-foreground">Acompanhe novidades e sabores do dia nas nossas redes.</p>
        <div className="mt-8 flex flex-col items-center gap-3">
          {[
            { href: IFOOD, label: "Pedir pelo iFood", icon: Bike },
            { href: WHATSAPP, label: `WhatsApp ${PHONE}`, icon: Phone },
            { href: INSTAGRAM, label: "@montecivettagelateria", icon: Instagram },
            { href: LINKTREE, label: "Todos os nossos links", icon: Link2 },
          ].map(({ href, label, icon: Icon }) => (
            <a key={href} href={href} target="_blank" rel="noreferrer" className="flex w-full max-w-sm items-center justify-center gap-2 rounded-full border border-cocoa/30 px-6 py-3 transition hover:bg-cocoa hover:text-cream">
              <Icon className="h-5 w-5" /> {label}
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
