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
    fontFamily: {
      'Acme': ['Acme'],
      'Bacode': ['Bacode'],
      'Broadway-bt': ['Broadway-bt'],
      'Greenhouse-gas': ['Greenhouse-gas'],
      'Quick-starter': ['Quick-starter'],
      'RubikMicrobe': ['RubikMicrobe'],
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide')
  ],
}