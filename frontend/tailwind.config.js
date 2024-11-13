/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        'wd': '1024',
        'wd2': '768',
        'wd3': '480',
        "w1": "50%"
      },
      screens: {
        'xs': '405px',
        'sm': '400px',
        'md': '700px'
      }
    },
  },
  plugins: [],
}

