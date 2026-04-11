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
          DEFAULT: '#FAFAF7',
          dark: '#F2F5F0',
        },
        warm: {
          DEFAULT: '#1E2B22',
          600: '#2E3F34',
          400: '#5C7063',
        },
        accent: {
          DEFAULT: '#6B8F71',
          light: '#A8C4AC',
          dark: '#4A6B50',
        },
        blush: {
          DEFAULT: '#D4A5A5',
          light: '#EDD8D8',
          dark: '#B88484',
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
