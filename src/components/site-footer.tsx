import logo from "@/assets/logo.png.asset.json";
import { ADDRESS, HOURS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t py-10 text-center text-sm text-muted-foreground">
      <img
        src={logo.url}
        alt="Monte Civetta"
        className="mx-auto mb-4 h-36 w-auto mix-blend-multiply md:h-48"
      />
      <p>{ADDRESS}</p>
      <ul className="mx-auto mt-3 flex max-w-md flex-col items-center gap-1">
        {HOURS.map(([d, h]) => (
          <li key={d} className="flex justify-between gap-4">
            <span>{d}</span>
            <span className="font-medium">{h}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4">© {new Date().getFullYear()} Monte Civetta Gelateria · La Casa del Gelato</p>
    </footer>
  );
}
