/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fdf2f4',
          100: '#fbe6e9',
          200: '#f5cdd3',
          300: '#efa9b4',
          400: '#e67a8b',
          500: '#d65269',
          600: '#bf3149',
          700: '#a02339',
          800: '#851f33',
          900: '#701c2f',
        },
      },
    },
  },
  plugins: [],
};