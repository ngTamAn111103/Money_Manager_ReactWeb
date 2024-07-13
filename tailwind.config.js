/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'green-primary': '#13F287',
      'green-secondary': '#B5FF57',
      'black-primary': '#101214',
      'black-secondary': '#282F35',

    }
  },
  plugins: [],
}