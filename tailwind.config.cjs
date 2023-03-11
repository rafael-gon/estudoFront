/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      '2xl': 36,
      'xl': 24,
      'lg': 20,
      'md': 18,
      'sm': 16,
      'xs': 14,
    },
    colors: {
      back: '#FAEFE3',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      grey: {
        300: '#12121F',
        400: '#AFAFBD',
        500: '#D7D7DE',
      },
      blue: {
        300: '#4643D3',
        400: '#5856D7',
      },
      red: {
        300: '#FE805C',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Montserrat, sans- serif'
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
}