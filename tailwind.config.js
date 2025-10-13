/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00A550', // vert principal
        dark: '#000000',
        light: '#ffffff',
      },
    },
  },
  plugins: [],
}

