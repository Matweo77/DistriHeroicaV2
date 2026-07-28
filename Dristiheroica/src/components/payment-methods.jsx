import { Smartphone, Landmark, Building2, Banknote } from "lucide-react"

const methods = [
  { name: "Nequi", logo: "/logos/nequi.jpg", color: "#DA0081", numero: "322 4091898" },
  { name: "Daviplata", logo: "/logos/daviplata.jpg", color: "#ED1C27", numero: "314 3648687" },
  { name: "Efectivo", icon: Landmark, color: "#FDDA24", numero: "$$$$$$" },
//   { name: "PSE", icon: Building2, color: "#00A0DF" },
//   { name: "Binance / Cripto", logo: "/logos/binance-mono.svg", color: "#F0B90B" },
//   { name: "Efecty", icon: Banknote, color: "#FFCE00" },
]

export function PaymentMethods() {
  return (
    <section
      id="pagos"
      className="border-y border-border bg-card/40 px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
    >
  <div className="mx-auto max-w-5xl">
  <div className="mx-auto max-w-2xl text-center">
    <span className="text-sm font-semibold uppercase tracking-wider text-gold">
      Fácil y seguro
    </span>
    <h2 className="mt-2 text-balance font-display text-3xl font-black tracking-tight sm:text-4xl">
      Métodos de Pago Disponibles
    </h2>
    <p className="mt-3 text-pretty text-muted-foreground">
      Aceptamos las principales plataformas del país. Elige la que más te
      convenga y contáctanos.
    </p>
  </div>

  {/* Cambiamos el grid para que en pantallas medianas/grandes se centren usando justify-center */}
  <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:max-w-4xl lg:mx-auto">
    {methods.map((method) => {
      const IconComponent = method.icon
      return (
        <li
          key={method.name}
          className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-5 text-center transition-colors hover:border-gold/40"
        >
          <span
            className="flex size-12 items-center justify-center rounded-full"
            style={{ backgroundColor: `${method.color}1a` }}
          >
            {method.logo ? (
              <img
                src={method.logo || "/placeholder.svg"}
                alt={`Logo de ${method.name}`}
                width={28}
                height={28}
                className="size-7 object-contain"
              />
            ) : IconComponent ? (
              <IconComponent
                className="size-6"
                style={{ color: method.color }}
              />
            ) : null}
          </span>
          
          <div className="flex flex-col items-center text-center">
            <span className="text-sm font-semibold leading-tight">
              {method.name}
            </span>
            {method.numero && (
              <span className="mt-1 text-xs text-muted-foreground">
                {method.numero}
              </span>
            )}
          </div>
        </li>
      )
    })}
  </ul>
</div>
    </section>
  )
}