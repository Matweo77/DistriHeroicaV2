import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { WhatsappIcon } from "./whatsaap-icon"
import { whatsappLink } from "@/lib/data"

const combos = [
  {
    name: "NETFLIX + DISNEY BASICO",
    subtitle: "STREAMING",
    platforms: [
      { name: "Netflix", logo: "/logos/netflix.svg", basePrice: 15000 },
      { name: "Disney+", logo: "/logos/disney-plus.svg" },
    ],
    price: "$ 24.000",
  },
  {
    name: "NETFLIX + DISNEY PREMIUM",
    subtitle: "PACK FAMILIAR",
    platforms: [
      { name: "Netflix", logo: "/logos/netflix.svg", basePrice: 15000 },
      { name: "Disney+", logo: "/logos/disney-plus.svg" },
    ],
    price: "$ 27.000",
  },
  {
    name: "NETFLIX + PRIME VIDEO",
    subtitle: "STREAMING",
    platforms: [
      { name: "Netflix", logo: "/logos/netflix.svg", basePrice: 15000 },
      { name: "Prime Video", logo: "/logos/prime-video.svg", basePrice: 12000 },
    ],
    price: "$ 23.000",
  },
  {
    name: "NETFLIX + HBO MAX",
    subtitle: "STREAMING",
    platforms: [
      { name: "Netflix", logo: "/logos/netflix.svg", basePrice: 15000 },
      { name: "HBO Max", logo: "/logos/hbo-max-mono.svg", basePrice: 11000 },
    ],
    price: "$ 25.000",
  },
  {
    name: "PRIME VIDEO + DISNEY BASICO",
    subtitle: "STREAMING",
    platforms: [
      { name: "Prime Video", logo: "/logos/prime-video.svg", basePrice: 12000 },
      { name: "Disney+", logo: "/logos/disney-plus.svg" },
    ],
    price: "$ 16.000",
  },
  {
    name: "PRIME VIDEO + DISNEY PREMIUM",
    subtitle: "PACK FAMILIAR",
    platforms: [
      { name: "Prime Video", logo: "/logos/prime-video.svg", basePrice: 12000 },
      { name: "Disney+", logo: "/logos/disney-plus.svg" },
    ],
    price: "$ 18.000",
  },
  {
    name: "HBO MAX + DISNEY BASICO",
    subtitle: "STREAMING",
    platforms: [
      { name: "HBO Max", logo: "/logos/hbo-max-mono.svg", basePrice: 11000 },
      { name: "Disney+", logo: "/logos/disney-plus.svg" },
    ],
    price: "$ 17.000",
  },
  {
    name: "HBO MAX + DISNEY PREMIUM",
    subtitle: "PACK FAMILIAR",
    platforms: [
      { name: "HBO Max", logo: "/logos/hbo-max-mono.svg", basePrice: 11000 },
      { name: "Disney+", logo: "/logos/disney-plus.svg" },
    ],
    price: "$ 19.000",
  },
]

function getComboLabel(combo) {
  const platformNames = combo.platforms.map((platform) => platform.name).join(" y ")
  const plan = combo.name.includes("PREMIUM") ? "Premium" : "Básico"
  return `${platformNames} ${plan}`
}

function getReferencePrice(combo) {
  return combo.platforms.reduce((total, platform) => {
    if (platform.name === "Disney+") {
      return total + (combo.name.includes("PREMIUM") ? 17000 : 13000)
    }
    return total + platform.basePrice
  }, 0)
}

function formatPrice(value) {
  return `$ ${value.toLocaleString("es-CO")}`
}

export function CombosSection() {
  return (
    <section id="combos" className="border-y border-border/60 bg-background px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Combos Imperdibles
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Llévate tus plataformas favoritas juntas a un precio especial y disfruta más, pagando menos.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {combos.map((combo) => (
            <Card
              key={combo.name}
              className="group relative overflow-hidden border-white/10 bg-card p-0 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-black/30"
            >
              <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 text-[10px] font-medium text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Disponible
              </div>

              <div className="p-7 sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">{combo.subtitle}</p>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-foreground">{getComboLabel(combo)}</h3>

                <div className="mt-6 flex min-h-20 w-full items-center justify-center gap-4">
                  {combo.platforms.map((platform, index) => (
                    <div key={platform.name} className="flex items-center gap-4">
                      <div className="flex size-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-2">
                        <img
                          src={platform.logo}
                          alt={`Logo de ${platform.name}`}
                          className="max-h-9 w-auto object-contain"
                        />
                      </div>
                      {index < combo.platforms.length - 1 && (
                        <span className="text-lg font-bold text-emerald-400">+</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="text-xs text-muted-foreground/75 line-through">Precio individual: {formatPrice(getReferencePrice(combo))}</p>
                  <div className="mt-2 flex items-baseline gap-3">
                    <span className="font-display text-3xl font-black leading-none text-gold">{combo.price}</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                      30 Días
                    </span>
                  </div>
                </div>

                <a
                  href={whatsappLink(`Hola, quiero comprar el combo ${getComboLabel(combo)} por ${combo.price}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3 text-sm font-semibold text-whatsapp-foreground transition-transform hover:-translate-y-0.5 hover:bg-whatsapp/90"
                >
                  <WhatsappIcon className="size-4" />
                  Comprar Combo
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}