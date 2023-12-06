/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '50px',
      // => @media (min-width: 576px) { ... }

      "1sm": "570px",
      "2sm": "786px",

      'md': '1000px',
      // => @media (min-width: 960px) { ... }

      

      'lg': '1500px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

