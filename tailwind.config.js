/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        heading: ['Cinzel', 'Georgia', 'serif'],
        script: ['Parisienne', 'cursive'],
      },
      maxWidth: {
        'container': '1320px',
      },
      colors: {
        premium: {
          black: '#0a0a0a',
          darkgray: '#1a1a1a',
          blue: '#0BC9F5',
          'blue-light': '#4FC3F7',
          'blue-dark': '#0288D1',
          silver: '#C0C0C0',
          'silver-light': '#E8E8E8',
          white: '#FFFFFF',
          'accent': '#1E88E5',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

