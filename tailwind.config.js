/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FDFBF8',
          dark: '#F5F2EE',
        },
        warm: {
          DEFAULT: '#2C2824',
          600: '#4A4440',
          400: '#6B6460',
        },
        accent: {
          DEFAULT: '#B8A898',
          light: '#D4C8BC',
          dark: '#9A8878',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Lora', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
