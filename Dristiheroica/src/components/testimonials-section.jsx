"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ChevronLeft, ChevronRight, MessageCircle, Quote, Star, X } from "lucide-react"

const testimonials = [
  {
    name: "Sofia Builes.",
    initial: "MR",
    location: "Medellin, Colombia",
    service: "Netflix Pantalla",
    text: "La activación fue inmediata y todo funcionó perfecto desde el primer día. Muy recomendados.",
    accent: "#E50914",
    proofImages: [
      "/capture/Usuario1a.jpeg",
      "/capture/Usuario1b.jpeg",
      "/capture/Usuario1c.jpeg",
      "/capture/Usuario1d.jpeg",
    ],
  },
  {
    name: "Julio Lopez.",
    initial: "JL",
    location: "Cartagena, Colombia",
    service: "Netflix",
    text: "Excelente atención y precios muy buenos. Me respondieron rápido y amable, los tendre en cuenta para proximas compras",
    accent: "#3B82F6",
    proofImages: [
      "/capture/Usuario2a.jpeg",
      "/capture/Usuario2b.jpeg",
      "/capture/Usuario2c.jpeg",
      "/capture/Usuario2d.jpeg",
      "/capture/Usuario2e.jpeg",
      "/capture/Usuario2f.jpeg",
    ],
  },
  {
    name: "Luz.",
    initial: "LZ",
    location: "Cali, Colombia",
    service: "Netflix",
    text: "Llevo varios meses comprando con ellos y siempre cumplen. La garantía y el soporte dan mucha tranquilidad.",
    accent: "#10A37F",
    proofImages: [
      "/capture/Usuario3a.jpeg",
      "/capture/Usuario3b.jpeg",
      "/capture/Usuario3c.jpeg",
      "/capture/Usuario3d.jpeg",
      "/capture/Usuario3e.jpeg",
      "/capture/Usuario3f.jpeg",
    ],
  },
]

function RatingStars() {
  return (
    <div className="flex gap-1" aria-label="Calificación de 5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="size-4 fill-gold text-gold" aria-hidden="true" />
      ))}
    </div>
  )
}

function ProofModal({ testimonial, onClose }) {
  const [activeImage, setActiveImage] = useState(0)
  const totalImages = testimonial.proofImages.length

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="proof-modal-title"
        className="relative flex max-h-[92vh] w-full max-w-5xl items-center justify-center animate-in zoom-in-95 duration-200"
      >
        <h2 id="proof-modal-title" className="sr-only">
          Comprobante de WhatsApp de {testimonial.name}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar comprobante"
          className="absolute -right-2 -top-12 flex size-9 items-center justify-center rounded-full border border-white/10 bg-card text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground sm:-right-12 sm:top-0"
        >
          <X className="size-5" />
        </button>

        <div className="w-full max-w-5xl rounded-2xl border border-white/10 bg-[#111b21] p-3 shadow-2xl shadow-black/50 sm:p-5">
          <div className="relative flex min-h-[55vh] max-h-[78vh] items-center justify-center overflow-hidden rounded-xl bg-black/20 p-2 sm:p-4">
            <img
              src={testimonial.proofImages[activeImage]}
              alt={`Captura ${activeImage + 1} de ${totalImages} del comprobante de WhatsApp de ${testimonial.name}`}
              className="max-h-[72vh] w-auto max-w-full rounded-xl object-contain"
            />
            <button
              type="button"
              onClick={() => setActiveImage((current) => (current - 1 + totalImages) % totalImages)}
              aria-label="Imagen anterior"
              className="absolute left-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition-colors hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:left-4"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => setActiveImage((current) => (current + 1) % totalImages)}
              aria-label="Siguiente imagen"
              className="absolute right-2 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition-colors hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:right-4"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 overflow-x-auto pb-1">
            {testimonial.proofImages.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Ver comprobante ${index + 1}`}
                aria-current={activeImage === index ? "true" : undefined}
                className={`size-14 shrink-0 overflow-hidden rounded-lg border-2 bg-black/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:size-16 ${
                  activeImage === index ? "border-gold opacity-100" : "border-white/10 opacity-55 hover:opacity-90"
                }`}
              >
                <img src={image} alt="" className="size-full object-cover" aria-hidden="true" />
              </button>
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Comprobante {activeImage + 1} de {totalImages}
          </p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)

  return (
    <section id="opiniones" className="border-t border-border/60 bg-background px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <Badge className="mb-4 border-gold/30 bg-gold/10 text-gold hover:bg-gold/10">
            Opiniones reales
          </Badge>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Más personas disfrutan sus plataformas favoritas con activación rápida, soporte cercano y garantia.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="group relative overflow-hidden border-white/10 bg-card/80 shadow-xl shadow-black/10 transition-colors hover:border-white/20"
            >
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 size-28 rounded-full blur-3xl opacity-20"
                style={{ backgroundColor: testimonial.accent }}
              />
              <CardContent className="relative flex h-full flex-col p-5 sm:p-6">
                <Quote className="mb-5 size-7 text-gold/40" aria-hidden="true" />
                <p className="min-h-20 text-sm leading-6 text-muted-foreground">
                  “{testimonial.text}”
                </p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <RatingStars />
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                    <CheckCircle2 className="size-3.5" aria-hidden="true" />
                    Cliente verificado
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedTestimonial(testimonial)}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-400/25 bg-emerald-400/5 px-3 py-2 text-xs font-medium text-emerald-300 transition-colors hover:border-emerald-400/50 hover:bg-emerald-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <MessageCircle className="size-3.5" aria-hidden="true" />
                  Ver comprobante real
                </button>
                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <div
                    className="flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: testimonial.accent }}
                  >
                    {testimonial.initial}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">{testimonial.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <span className="ml-auto hidden rounded-full border border-white/10 px-2 py-1 text-[10px] text-muted-foreground sm:inline-flex">
                    {testimonial.service}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {selectedTestimonial ? (
        <ProofModal
          testimonial={selectedTestimonial}
          onClose={() => setSelectedTestimonial(null)}
        />
      ) : null}
    </section>
  )
}
