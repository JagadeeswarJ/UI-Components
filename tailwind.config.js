/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f1ff',
          100: '#e4e6ff',
          500: '#646cff',
          600: '#535bf2',
          700: '#4338ca',
        },
        dark: {
          800: '#1a1a1a',
          900: '#242424',
        }
      },
    },
  },
  plugins: [],
}