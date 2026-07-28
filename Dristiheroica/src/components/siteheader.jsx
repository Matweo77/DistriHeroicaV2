import { ShieldCheck, Headphones, Zap } from "lucide-react"
import { WhatsappIcon } from "./whatsaap-icon"
import { whatsappLink } from "../lib/data"

const trust = [
  { icon: ShieldCheck, label: "100% Confiable" },
  { icon: Headphones, label: "Soporte 24/7" },
  { icon: Zap, label: "Entrega Inmediata" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5">
          <img
            src="/logos/la-heroica-logo.png"
            alt="Distribuidora La Heroica"
            className="h-11 w-auto sm:h-12"
          />
          <span className="sr-only">Distribuidora La Heroica</span>
        </a>

        {/* Indicadores de confianza (escritorio) */}
        <ul className="hidden items-center gap-6 lg:flex">
          {trust.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
            >
              <Icon className="size-4 text-gold" />
              {label}
            </li>
          ))}
        </ul>

        {/* CTA WhatsApp */}
        <a
          href={whatsappLink("Hola, quiero más información sobre sus servicios de streaming.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-3 py-2 text-sm font-semibold text-whatsapp-foreground transition-transform hover:-translate-y-0.5 hover:bg-whatsapp/90"
        >
          <WhatsappIcon className="size-4" />
          <span className="hidden sm:inline">Contáctanos</span>
        </a>
      </div>
    </header>
  )
}