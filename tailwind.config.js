const { readBuilderProgram } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        light: 'rgba(255, 255, 255, 1)',
        darkgray: 'hsl(0, 0%, 20%)'
      }
    },
  },
  plugins: [],
}