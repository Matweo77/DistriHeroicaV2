
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/styles/global.css",  // ← Agrega esto
  ],
  safelist: [
    'sm:py-20',    // ← Fuerza esta clase
    'sm:px-20',
    { pattern: /sm:py-/ },  // ← Fuerza todos sm:py
  ],
  theme: {
    extend: {},
  },
}

