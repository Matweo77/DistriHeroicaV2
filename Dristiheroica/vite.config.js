import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // <-- Importa path

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Esto le dice a Vite que "@" apunta a la carpeta "src"
      '@': path.resolve(__dirname, './src'),
    },
  },
})