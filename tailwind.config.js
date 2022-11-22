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
      'RubikMicrobe': ['RubikMicrobe']
    },
    extend: {
      colors: {
        orange: 'rgb(255, 115, 29)',
        beige: 'rgb(255, 247, 233)',
        blue: 'rgb(95, 157, 247)',
        navy: 'rgb(23, 70, 162)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
}