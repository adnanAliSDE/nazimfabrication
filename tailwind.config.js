/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F1FAF6', // Lightest shade
          100: '#D2EFE1',
          200: '#A2E3BD',
          300: '#71D898',
          400: '#41CC74',
          500: '#008A54', // Base color
          600: '#007B4C',
          700: '#00693F',
          800: '#005631',
          900: '#003C1A', // Darkest shade
        },
        secondary: {
          50: '#E5E8E8', // Lightest shade
          100: '#C3C8C9',
          200: '#90A0A1',
          300: '#5D7879',
          400: '#2B5051',
          500: '#003133', // Base color
          600: '#002A2C',
          700: '#002123',
          800: '#00171A',
          900: '#000B0D', // Darkest shade
        },
      },
    },
  },
  plugins: [],
}