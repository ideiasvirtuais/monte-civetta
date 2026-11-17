// Facts the site states as true. Keep them here so every page says the same thing.

export const ADDRESS = "R. Des. Maurílio Coimbra, 95 — Canasvieiras, Florianópolis";
export const PHONE = "(48) 99123-5390";
export const WHATSAPP = "https://wa.me/5548991235390";
// Pre-filled message for the floating WhatsApp button.
export const WHATSAPP_MESSAGE = "(Contato via site) Olá, gostaria de tirar uma dúvida.";
export const WHATSAPP_CONTACT = `${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const IFOOD =
  "https://www.ifood.com.br/delivery/florianopolis-sc/monte-civetta-gelateria-canasvieiras/47cab871-7828-4ad0-8a83-d783adf0df75";
export const INSTAGRAM = "https://www.instagram.com/montecivettagelateria";
export const LINKTREE = "https://linktr.ee/montecivettagelateria";
export const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+Des.+Maur%C3%ADlio+Coimbra+95+Canasvieiras+Florian%C3%B3polis";
export const MAP_EMBED =
  "https://www.google.com/maps?q=R.+Des.+Maur%C3%ADlio+Coimbra+95+Canasvieiras+Florian%C3%B3polis&output=embed";

export const HOURS: [string, string][] = [
  ["Segunda", "Fechado"],
  ["Terça a quinta", "13h às 19h"],
  ["Sexta, sábado, domingo e feriados", "13h às 20h"],
];
