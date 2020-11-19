//Refer all available tailwind color palettes over here
// https://tailwindcss.com/docs/customizing-colors#color-palette-reference

const colors = require('tailwindcss/colors')

module.exports = {
    future: {
    },
    purge: [
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      colors: {
	...colors
      }
    },
    variants: {},
    plugins: [],
}
