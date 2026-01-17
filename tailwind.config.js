/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}", // Add this if your files are in the root
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1f2937',   /* Dark Steel Gray */
          blue: '#374151',   /* Lighter Gray */
          orange: '#d35400', /* Rust/Orange */
          darkOrange: '#a04000',
          gray: '#2d3748',   /* Gunmetal */
          light: '#f8f8f8'   /* Off-white */
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}