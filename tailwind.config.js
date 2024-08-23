/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '6px 10px 21px -6px rgba(0,0,0,0.75)',
        "4xl": "15px 18px 26px 0px rgba(0,0,0,0.75)"
      },
    },
  },
  plugins: [],
}

