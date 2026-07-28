import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/Page.jsx' // <--- Asegúrate de tener esta línea
import './styles/global.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
