import { Card } from "@/components/ui/card"
import { WhatsappIcon } from "./whatsaap-icon"
import { services, whatsappLink } from "@/lib/data"

function ServiceCard({ service, price }) {
  return (
    <Card className="group relative gap-0 border-0 py-0 ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:ring-gold/50">
      {/* Halo de color de la marca */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full opacity-25 blur-3xl transition-opacity duration-300 group-hover:opacity-40"
        style={{ backgroundColor: service.accent }}
      />

      <div className="flex flex-col items-center gap-5 p-6">
        {/* Logo */}
        <div className="flex h-16 items-center justify-center">
          {service.logo ? (
            <img
              src={service.logo || "/placeholder.svg"}
              alt={`Logo de ${service.name}`}
              width={140}
              height={64}
              className={`w-auto object-contain ${service.logoClass ?? "h-10"}`}
            />
          ) : (
            <span
              className="font-display text-2xl font-black"
              style={{ color: service.accent }}
            >
              {service.name}
            </span>
          )}
        </div>

        {/* Nombre + etiqueta */}
        <div className="flex flex-col items-center gap-1.5 text-center">
          <h3 className="font-display text-lg font-bold">{service.name}</h3>
          {service.tag && (
            <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[11px] font-semibold text-gold">
              {service.tag}
            </span>
          )}
        </div>

        {/* Precio */}
        <div className="flex items-baseline gap-1">
          <span className="font-display text-3xl font-black text-foreground">
            {service.price}
          </span>
          <span className="text-xs font-medium text-muted-foreground">/mes</span>
        </div>

        {/* CTA */}
        <a
          href={whatsappLink(
            `Hola DistriHeroica, quiero adquirir una pantalla de ${service.name} de ${service.price}. Quedo atento a los datos para realizar el pago.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground transition-transform hover:-translate-y-0.5 hover:bg-whatsapp/90"
        >
          <WhatsappIcon className="size-4" />
          Comprar ahora
        </a>
      </div>
    </Card>
  )
}

export function ServicesSection() {
  return (
    <section id="catalogo" className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl font-black tracking-tight sm:text-4xl">
            Catálogo de Pantallas y Servicios
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Cuentas premium originales, activación inmediata y garantía durante
            toda tu suscripción.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}