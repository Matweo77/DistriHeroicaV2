// Número de WhatsApp del negocio (formato internacional sin "+")
export const WHATSAPP_NUMBER = "573008650664"

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export type Service = {
  name: string
  logo: string
  /** Ancho máximo del logo dentro de la tarjeta (clase tailwind) */
  logoClass?: string
  price: string
  tag?: string
  accent: string // color de fondo suave para el halo de la tarjeta
}

export const services: Service[] = [
  {
    name: "Netflix",
    logo: "/logos/netflix.svg",
    logoClass: "h-12",
    price: "$ 16.000",
    tag: "Más vendido",
    accent: "#E50914",
  },
  {
    name: "Disney premium (Partidos champions league)",
    logo: "/logos/disney-plus.svg",
    logoClass: "h-14",
    price: "$ 17.000",
    tag: "Popular",
    accent: "#113CCF",
  },
  {
    name: "HBO Max",
    logo: "/logos/hbomax.jpg",
    logoClass: "h-17",
    price: "$ 11.000",
    accent: "#7B2FF7",
  },
  {
    name: "Prime Video",
    logo: "/logos/prime-video.svg",
    logoClass: "h-10",
    price: "$ 12.000",
    tag: "Destacado",
    accent: "#00A8E1",
  },
  {
    name: "Paramount+",
    logo: "/logos/paramount.svg",
    logoClass: "h-17",
    price: "$ 14.000",
    accent: "#0064FF",
  },
  {
    name: "ViX Premium",
    logo: "", // sin logo oficial disponible: se renderiza como marca tipográfica
    price: "$ 13.000",
    accent: "#FF5A00",
  },
  {
    name: "IPTV Premium",
    logo: "",
    price: "$ 16.000",
    tag: "+10.000 canales",
    accent: "#22C55E",
  },
  {
    name: "Canva Pro",
    logo: "/logos/canva.svg",
    logoClass: "h-16",
    price: "$ 14.000",
    accent: "#00C4CC",
  },

    {
    name: "Claro video + Win",
    logo: "/logos/claro+win.png",
    logoClass: "h-17",
    price: "$30.000",
    accent: "#eebf5b",
  },
  {
    name: "Magis tv",
    logo: "/logos/magistv.png",
    logoClass: "h-16 ",
    price: "$20.000",
    accent: "#534bbd",
  },
  {
    name: "Youtube premium",
    logo: "/logos/youtube.png",
    logoClass: "h-16",
    price: "$17.000",
    accent: "#ebebeb",
  },
  {
    name: "ChatGPT Plus",
    logo: "/logos/chatgpt.svg",
    logoClass: "h-16",
    price: "$ 95.000",
    tag: "GPT-4",
    accent: "#10A37F",
  },
]

export type Slide = {
  image: string
  category: string
  title: string
  subtitle: string
}

export const slides: Slide[] = [
  {
    image: "/carousel/1.jpg",
    category: "Series de Acción",
    title: "Adrenalina sin límites",
    subtitle: "Los estrenos más vistos, disponibles hoy mismo.",
  },
  {
    image: "/carousel/2.jpg",
    category: "Cine Familiar",
    title: "Aventuras para toda la familia",
    subtitle: "Diversión garantizada en la mejor calidad.",
  },
  {
    image: "/carousel/3.jpg",
    category: "Ciencia Ficción",
    title: "Mundos por descubrir",
    subtitle: "Las sagas más épicas del streaming.",
  },
  {
    image: "/carousel/4.jpg",
    category: "Dramas Premiados",
    title: "Historias que enganchan",
    subtitle: "Contenido premium, siempre disponible.",
  },
]
