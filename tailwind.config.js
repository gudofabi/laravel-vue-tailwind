const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '350px',
      ...defaultTheme.screens
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
