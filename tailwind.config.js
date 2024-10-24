/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '900px',
      '1000': '1000px',
      '1200': '1200px',
      '700': '700px',
      '500': '500px',
    },
    extend: {
    },
  },
  plugins: [],
}