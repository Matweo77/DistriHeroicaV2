import { Analytics } from '@vercel/analytics/react'
import '../styles/global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark bg-background">
      <head>
        <title>Distribuidora La Heroica | Cuentas de Streaming al Mejor Precio</title>
        <meta name="description" content="Tus plataformas de streaming favoritas (Netflix, Disney+, HBO Max, Prime Video y más) 100% garantizadas, con entrega inmediata y soporte 24/7." />
        <meta name="keywords" content="streaming, Netflix, Disney Plus, HBO Max, Prime Video, cuentas de streaming, La Heroica" />
        <meta name="theme-color" content="#161616" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {import.meta.env.MODE === 'production' && <Analytics />}
      </body>
    </html>
  )
}