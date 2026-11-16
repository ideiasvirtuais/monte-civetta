import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Link2, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ADDRESS, HOURS, INSTAGRAM, LINKTREE, MAP_URL, PHONE, WHATSAPP } from "@/lib/site";

export const Route = createFileRoute("/fale-conosco")({
  head: () => ({
    meta: [
      { title: "Fale conosco — Monte Civetta Gelateria" },
      {
        name: "description",
        content:
          "Fale com a Monte Civetta pelo WhatsApp (48) 99123-5390, pelo Instagram @montecivettagelateria ou visite a loja em Canasvieiras.",
      },
      { property: "og:title", content: "Fale conosco — Monte Civetta Gelateria" },
      {
        property: "og:description",
        content: "WhatsApp, Instagram e o endereço da loja em Canasvieiras.",
      },
    ],
  }),
  component: FaleConosco,
});

const CHANNELS = [
  { href: WHATSAPP, label: `WhatsApp ${PHONE}`, icon: Phone, note: "Para pedidos, dúvidas e reservas de grupo." },
  { href: INSTAGRAM, label: "@montecivettagelateria", icon: Instagram, note: "Sabores do dia e novidades." },
  { href: LINKTREE, label: "Todos os nossos links", icon: Link2, note: "iFood, cardápio e mais." },
  { href: MAP_URL, label: "Onde estamos", icon: MapPin, note: ADDRESS },
];

export function FaleConosco() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pt-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-caramel">La casa del gelato</p>
        <h1 className="mt-3 font-serif text-5xl text-cocoa md:text-6xl">Fale conosco</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Escolha um canal: respondemos pelo WhatsApp e pelas redes.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-10">
        <ul className="grid gap-4">
          {CHANNELS.map(({ href, label, icon: Icon, note }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-3xl border border-cocoa/15 bg-card p-6 transition hover:bg-secondary"
              >
                <Icon className="mt-1 h-7 w-7 shrink-0 text-caramel" />
                <span>
                  <span className="block font-serif text-2xl text-cocoa">{label}</span>
                  <span className="mt-1 block text-muted-foreground">{note}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-3xl bg-cocoa p-6 text-cream">
          <Clock className="h-7 w-7 text-caramel" />
          <h2 className="mt-3 font-serif text-2xl">Horário</h2>
          <ul className="mt-2 space-y-1 opacity-80">
            {HOURS.map(([d, h]) => (
              <li key={d} className="flex justify-between gap-4">
                <span>{d}</span>
                <span className="font-medium">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
