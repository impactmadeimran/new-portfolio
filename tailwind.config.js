/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'great-blue': {
          DEFAULT: '#2A669F',
          50: '#D2EEF3',
          100: '#BCE4ED',
          200: '#90CCE1',
          300: '#64B0D6',
          400: '#378ECA',
          500: '#2A669F',
          600: '#234D83',
          700: '#1B3766',
          800: '#14244A',
          900: '#0C142E'
        },
      }
    },
  },
  plugins: [],
}