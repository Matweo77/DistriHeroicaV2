"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { slides } from "@/lib/data"
import { cn } from "@/lib/utils"

const AUTOPLAY_MS = 4500

export function FeaturedCarousel() {
  const [index, setIndex] = useState(0)
  const timer = useRef(null)
  const count = slides.length

  const goTo = useCallback((i) => setIndex((i + count) % count), [count])
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count])

  useEffect(() => {
    timer.current = setInterval(next, AUTOPLAY_MS)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [next])

  const pause = () => timer.current && clearInterval(timer.current)
  const resume = () => {
    if (timer.current) clearInterval(timer.current)
    timer.current = setInterval(next, AUTOPLAY_MS)
  }

  return (
    <section
      aria-label="Contenido destacado"
      className="px-4 py-8 sm:px-6 lg:px-8"
    >
      <div
        className="group/carousel relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40"
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
          {slides.map((slide, i) => (
            <div
              key={slide.image}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                i === index ? "opacity-100" : "pointer-events-none opacity-0",
              )}
              aria-hidden={i !== index}
            >
              {/* Cambiado de next/image a etiqueta img estándar optimizada para Vite */}
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
              {/* Degradado para legibilidad del texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 max-w-xl p-5 sm:p-8">
                <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground">
                  {slide.category}
                </span>
                <h3 className="mt-3 font-display text-xl font-extrabold text-white sm:text-3xl">
                  {slide.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/80 sm:text-base">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
        <button
          type="button"
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur transition-opacity hover:bg-black/60 focus-visible:opacity-100 group-hover/carousel:opacity-100"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur transition-opacity hover:bg-black/60 focus-visible:opacity-100 group-hover/carousel:opacity-100"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Indicadores (dots) */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 sm:bottom-6 sm:right-8">
          {slides.map((slide, i) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir a la diapositiva ${i + 1}`}
              aria-current={i === index}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-6 bg-gold" : "w-2 bg-white/50 hover:bg-white/80",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}