import { WhatsappIcon } from "./whatsaap-icon"
import { whatsappLink } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="bg-background">
      {/* Banner con el lema */}
      <div className="bg-gold px-4 py-8 text-center sm:px-6">
        <p className="mx-auto max-w-4xl text-balance font-display text-base font-black uppercase tracking-wide text-gold-foreground sm:text-xl">
           Calidad, Confianza y el Mejor Servicio 
        </p>
        <p className="mt-1 text-sm font-semibold text-gold-foreground/80">
          Tu entretenimiento, nuestra prioridad
        </p>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-lg bg-gold font-display text-lg font-black text-gold-foreground">
            H
          </span>
          <span className="font-display text-sm font-extrabold leading-none">
            Distribuidora
            <span className="block text-xs font-semibold text-gold">
              La Heroica
            </span>
          </span>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Distribuidora La Heroica. Todas las marcas
          son propiedad de sus respectivos dueños.
        </p>

        <a
          href={whatsappLink("Hola, quiero información sobre sus servicios.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground transition-transform hover:-translate-y-0.5 hover:bg-whatsapp/90"
        >
          <WhatsappIcon className="size-4" />
          Escríbenos
        </a>
      </div>
    </footer>
  )
}