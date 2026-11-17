import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ADDRESS, HOURS, MAP_EMBED, MAP_URL, PHONE, WHATSAPP } from "@/lib/site";
import { SPACE_PHOTOS } from "@/lib/space-photos";

export const Route = createFileRoute("/localizacao")({
  head: () => ({
    meta: [
      { title: "Localização e horário — Monte Civetta Gelateria" },
      {
        name: "description",
        content:
          "Monte Civetta Gelateria em Canasvieiras, Florianópolis: R. Des. Maurílio Coimbra, 95. Ter–Dom, a partir das 13h.",
      },
      { property: "og:title", content: "Localização e horário — Monte Civetta Gelateria" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content: "R. Des. Maurílio Coimbra, 95 — Canasvieiras. Ter–Dom a partir das 13h.",
      },
    ],
  }),
  component: Localizacao,
});

function Localizacao() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pt-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-caramel">La casa del gelato</p>
        <h1 className="mt-3 font-serif text-5xl text-cocoa md:text-6xl">Localização</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Estamos em Canasvieiras, no norte da ilha. Venha de carro, a pé ou de bike.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-cocoa/15">
          <iframe
            title="Mapa com o endereço da Monte Civetta Gelateria"
            src={MAP_EMBED}
            loading="lazy"
            className="h-[380px] w-full border-0"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 rounded-3xl bg-cocoa p-8 text-cream">
          <div>
            <MapPin className="h-8 w-8 text-caramel" />
            <h2 className="mt-3 font-serif text-3xl">Endereço</h2>
            <p className="mt-2 opacity-80">{ADDRESS}</p>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Abrir no Google Maps
            </a>
          </div>
          <div>
            <Clock className="h-8 w-8 text-caramel" />
            <h2 className="mt-3 font-serif text-3xl">Horário</h2>
            <ul className="mt-2 space-y-1 opacity-80">
              {HOURS.map(([d, h]) => (
                <li key={d} className="flex justify-between gap-4">
                  <span>{d}</span>
                  <span className="font-medium">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Phone className="h-8 w-8 text-caramel" />
            <h2 className="mt-3 font-serif text-3xl">Telefone</h2>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-2 inline-block opacity-80 hover:opacity-100">
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SPACE_PHOTOS.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-lg bg-secondary object-contain"
            />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
