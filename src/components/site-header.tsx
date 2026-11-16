import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

const LINKS = [
  { to: "/", label: "Início" },
  { to: "/produtos", label: "Produtos" },
  { to: "/sabores", label: "Sabores" },
  { to: "/galeria", label: "Galeria" },
  { to: "/localizacao", label: "Localização" },
  { to: "/entrega", label: "Entrega" },
  { to: "/fale-conosco", label: "Fale conosco" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-cocoa/10 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-5">
        <Link to="/" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="Monte Civetta"
            className="h-24 w-auto mix-blend-multiply md:h-32"
          />
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 rounded-full border border-cocoa/30 px-4 py-2 text-sm text-cocoa lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          Menu
        </button>

        <nav
          className={
            open
              ? "flex w-full flex-col items-stretch gap-1 lg:flex-row lg:items-center lg:justify-center lg:gap-1"
              : "hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-1"
          }
        >
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-full px-4 py-2 text-center text-sm text-cocoa hover:bg-secondary"
              activeProps={{ className: "bg-secondary font-medium text-cocoa" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
