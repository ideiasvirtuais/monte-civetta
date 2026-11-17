import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import h1 from "@/assets/hero-1.jpg.asset.json";
import h2 from "@/assets/hero-2.jpg.asset.json";
import h3 from "@/assets/hero-3.jpg.asset.json";
import h4 from "@/assets/hero-4.jpg.asset.json";
import h5 from "@/assets/hero-5.jpg.asset.json";

/** The five photos shown in the home-page slideshow, in the order they appear. */
export const HERO_SLIDES = [
  {
    src: h1.url,
    alt: "Casquinha de gelato com crocante, na área externa da gelateria",
  },
  {
    src: h2.url,
    alt: "Cliente sorrindo oferece uma casquinha com calda de chocolate",
  },
  {
    src: h3.url,
    alt: "Casquinha com duas bolas de gelato e calda, dentro da loja",
  },
  {
    src: h4.url,
    alt: "Embalagem com bolas coloridas de gelato diante da vitrine",
  },
  {
    src: h5.url,
    alt: "Bandeja com bolas coloridas de gelato e biscoito da Monte Civetta",
  },
];

const AUTOPLAY_MS = 4500;
const SWIPE_MIN_PX = 40;

export function HeroSlideshow() {
  const total = HERO_SLIDES.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);

  const go = useCallback(
    (dir: number) => setIndex((v) => (v + dir + total) % total),
    [total],
  );

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex((v) => (v + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, total]);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) >= SWIPE_MIN_PX) go(dx < 0 ? 1 : -1);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-[2rem] bg-cocoa/5 shadow-2xl"
      role="group"
      aria-roledescription="carrossel"
      aria-label="Fotos dos gelatos da Monte Civetta"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        startX.current = null;
      }}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => (startX.current = null)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      <div className="aspect-[4/5] w-full">
        {HERO_SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            loading={i === 0 ? "eager" : "lazy"}
            aria-hidden={i !== index}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="Foto anterior"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-cream/80 p-2 text-cocoa transition hover:bg-cream"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Próxima foto"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-cream/80 p-2 text-cocoa transition hover:bg-cream"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {HERO_SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Ver a foto ${i + 1} de ${total}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-7 bg-caramel" : "w-2.5 bg-cream/70 hover:bg-cream"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
