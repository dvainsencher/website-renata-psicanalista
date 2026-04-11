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
          DEFAULT: '#FEF8F5',
          dark: '#FAF0EC',
        },
        warm: {
          DEFAULT: '#2E1F2A',
          600: '#4A3040',
          400: '#7A5C68',
        },
        accent: {
          DEFAULT: '#C4567E',
          light: '#E8A0BE',
          dark: '#A03A64',
        },
        peach: {
          DEFAULT: '#E8906A',
          light: '#F5C0A0',
          dark: '#C86848',
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
