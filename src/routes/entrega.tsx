import { createFileRoute, Link } from "@tanstack/react-router";
import { Bike, Clock, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ADDRESS, HOURS, IFOOD, MAP_URL, WHATSAPP } from "@/lib/site";
import p10 from "@/assets/galeria-10.jpg.asset.json";

export const Route = createFileRoute("/entrega")({
  head: () => ({
    meta: [
      { title: "Entrega — Monte Civetta Gelateria" },
      {
        name: "description",
        content:
          "Peça o gelato da Monte Civetta pelo iFood ou pelo WhatsApp. Atendemos em Canasvieiras, Florianópolis.",
      },
      { property: "og:title", content: "Entrega — Monte Civetta Gelateria" },
      {
        property: "og:description",
        content: "Gelato em casa: peça pelo iFood ou pelo WhatsApp.",
      },
    ],
  }),
  component: Entrega,
});

function Entrega() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pt-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-caramel">La casa del gelato</p>
        <h1 className="mt-3 font-serif text-5xl text-cocoa md:text-6xl">Entrega</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Gelato em casa ou no hotel: peça pelo iFood ou combine pelo WhatsApp.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-10">
        <div className="flex flex-col items-center gap-3">
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-cocoa/15 bg-card p-6">
            <Clock className="h-7 w-7 text-caramel" />
            <h2 className="mt-3 font-serif text-2xl text-cocoa">Horário</h2>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              {HOURS.map(([d, h]) => (
                <li key={d} className="flex justify-between gap-4">
                  <span>{d}</span>
                  <span className="font-medium">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-cocoa/15 bg-card p-6">
            <MapPin className="h-7 w-7 text-caramel" />
            <h2 className="mt-3 font-serif text-2xl text-cocoa">Ou venha buscar</h2>
            <p className="mt-2 text-muted-foreground">{ADDRESS}</p>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-caramel underline underline-offset-4"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <img
          src={p10.url}
          alt="Vitrine de sabores da Monte Civetta"
          loading="lazy"
          className="mx-auto max-h-[460px] rounded-3xl object-cover"
        />
        <p className="mt-8 text-center">
          <Link to="/sabores" className="text-caramel underline underline-offset-4">
            Ver os sabores
          </Link>
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
