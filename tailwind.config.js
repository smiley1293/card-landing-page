/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "purple-200":"#DAC7FC",
        "purple-300":"#CAACFF",
        "purple-500":"#6B49CD",
        "purple-700":"#5D0096",
        "purple-900":"#210035",
        "pink-500":"#AD26FF",
      },
      boxShadow:{
        "md": "6px 6px 16px 0 rgba(0, 0, 0, 0.25), -4px -4px 12px 0 rgba(255, 255, 255, 0.3)"
      }
    },
  },
  plugins: [],
}

