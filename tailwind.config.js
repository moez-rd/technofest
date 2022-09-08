/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'primary': {
            '50': '#eeefff',
            '100': '#dfe1ff',
            '200': '#c6c7ff',
            '300': '#a4a3fe',
            '400': '#897efb',
            '500': '#775ff5',
            '600': '#6942e9',
            '700': '#5b34ce',
            '800': '#4a2da6',
            '900': '#3c2a7e',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
