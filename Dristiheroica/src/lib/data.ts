// Número de WhatsApp de la distribuidora
export const WHATSAPP_NUMBER = "573054385451";

export function whatsappLink(message:string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
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
    price: "$ 15.000",
    tag: "Más vendido",
    accent: "#E50914",
  },
  {
    name: "Premium (Champions league)",
    logo: "/logos/disney-plus.svg",
    logoClass: "h-14",
    price: "$ 17.000",
    tag: "Popular",
    accent: "#113CCF",
  },
  {
    name: "Directv Go",
    logo: "/logos/Dgo.png",
    logoClass: "h-15",
    tag:"200 Canales en vivo",
    price: "$25.000",
    accent: "#FE8E1A",
  },
  {
    name: "Disney Plus",
    logo: "/logos/disney-plus.svg",
    logoClass: "h-14",
    price: "$ 13.000",
    accent: "#113CCF",
  },
  {
    name: "Prime video",
    logo: "/logos/prime-video.svg",
    logoClass: "h-10",
    price: "$ 12.000",
    tag: "Destacado",
    accent: "#00A8E1",
  }, 
  {
    name: "HBO Max",
    logo: "/logos/hbomax.jpg",
    logoClass: "h-17",
    price: "$ 11.000",
    accent: "#7B2FF7",
  },
  {
    name: "Paramount+",
    logo: "/logos/paramount.svg",
    logoClass: "h-17",
    price: "$ 14.000",
    accent: "#0064FF",
  },
  {
    name: "Youtube premium",
    logo: "/logos/youtube.png",
    logoClass: "h-13",
    price: "$17.000",
    accent: "#FC1C1C",
  },
  {
    name: "Universal +",
    logo: "/logos/Universal.png",
    logoClass: "h-32",
    price: "$13.500",
    accent: "#FDFDFD",
  },
  {
    name: "Crunchyroll",
    logo: "/logos/Crunchyroll.png",
    logoClass: "h-16",
    price: "$12.000",
    accent: "#FF5A00",
  },
  {
    name: "Rakuten Viki",
    logo: "/logos/Rakuten.png",
    logoClass: "h-30",
    price: "$11.500",
    accent: "#0697F7",
  },
  {
    name: "Spotify",
    logo: "/logos/Spotify.png",
    logoClass: "h-25",
    price: "$13.800",
    accent: "#1CD360",
  },
  {
    name: "Capcut Pro",
    logo: "/logos/Capcut.png",
    logoClass: "h-14",
    price: "$18.000",
    accent: "#FDFDFD",
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
  // {
  //   name: "ChatGPT Plus",
  //   logo: "/logos/chatgpt.svg",
  //   logoClass: "h-16",
  //   price: "$ 45.000",
  //   tag: "GPT-5",
  //   accent: "#10A37F",
  // },
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
