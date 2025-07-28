/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  purge: [],
  darkMode: false,
  theme: {
    extend: {},
  },
  safelist: [
    'm-0'
  ],
  variants: {
    extend: {},
  },
  plugins: [],
}
