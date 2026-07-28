import { ShieldCheck, Headphones, Zap } from "lucide-react"
import { WhatsappIcon } from "./whatsaap-icon"
import { whatsappLink } from "../lib/data"

const badges = [
  { icon: ShieldCheck, label: "100% Confiable" },
  { icon: Headphones, label: "Soporte 24/7" },
  { icon: Zap, label: "Entrega Inmediata" },
]

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-4 pt-14 pb-10 sm:px-6 sm:pt-20 lg:px-8"
    >
      {/* Halo dorado sutil de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-20 mx-auto h-72 max-w-3xl rounded-full bg-gold/10 blur-3xl"
      />

      {/* Logo transparentado como marca de agua detrás del titular */}
      <img
        src="/logos/la-heroica-logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[50%]  z-0 w-[min(96%,760px)] -translate-x-1/2 -translate-y-1/2 select-none opacity-4"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold sm:text-sm">
           Calidad, Confianza y el Mejor Servicio 
        </span>

        <h1 className="mt-6 text-balance font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
          ¡Bienvenido a{" "}
          <span className="text-gold">Distribuidora La Heroica</span>!
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Tus plataformas de streaming favoritas, al mejor precio,{" "}
          <span className="font-semibold text-foreground">
            100% Garantizadas.
          </span>
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink("Hola, quiero comprar una cuenta de streaming.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground shadow-lg shadow-whatsapp/20 transition-transform hover:-translate-y-0.5 hover:bg-whatsapp/90 sm:w-auto"
          >
            <WhatsappIcon className="size-5" />
            Comprar por WhatsApp
          </a>
          <a
            href="#catalogo"
            className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary sm:w-auto"
          >
            Ver catálogo
          </a>
        </div>

        {/* Badges de confianza en móvil */}
        <ul className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
          {badges.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <Icon className="size-3.5 text-gold" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}