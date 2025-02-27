/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
        'tangerine': ['Tangerine', 'cursive'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // Lato Utilities
        '.lato-thin': {
          fontFamily: '"Lato", sans-serif',
          fontWeight: 100,
          fontStyle: 'normal',
        },
        '.lato-light': {
          fontFamily: '"Lato", sans-serif',
          fontWeight: 300,
          fontStyle: 'normal',
        },
        '.lato-regular': {
          fontFamily: '"Lato", sans-serif',
          fontWeight: 400,
          fontStyle: 'normal',
        },
        '.lato-bold': {
          fontFamily: '"Lato", sans-serif',
          fontWeight: 700,
          fontStyle: 'normal',
        },
        '.lato-black': {
          fontFamily: '"Lato", sans-serif',
          fontWeight: 900,
          fontStyle: 'normal',
        },
        '.lato-thin-italic': {
          fontFamily: '"Lato", sans-serif',
          fontWeight: 100,
          fontStyle: 'italic',
        },
        '.lato-light-italic': {
          fontFamily: '"Lato", sans-serif',
          fontWeight: 300,
          fontStyle: 'italic',
        },
        '.lato-regular-italic': {
          fontFamily: '"Lato", sans-serif',
          fontWeight: 400,
          fontStyle: 'italic',
        },
        '.lato-bold-italic': {
          fontFamily: '"Lato", sans-serif',
          fontWeight: 700,
          fontStyle: 'italic',
        },
        '.lato-black-italic': {
          fontFamily: '"Lato", sans-serif',
          fontWeight: 900,
          fontStyle: 'italic',
        },
        // Dancing Script Utilities
        '.dancing-script-400': {
          fontFamily: '"Dancing Script", cursive',
          fontOpticalSizing: 'auto',
          fontWeight: '400',
          fontStyle: 'normal',
        },
        '.dancing-script-500': {
          fontFamily: '"Dancing Script", cursive',
          fontOpticalSizing: 'auto',
          fontWeight: '500',
          fontStyle: 'normal',
        },
        '.dancing-script-600': {
          fontFamily: '"Dancing Script", cursive',
          fontOpticalSizing: 'auto',
          fontWeight: '600',
          fontStyle: 'normal',
        },
        '.dancing-script-700': {
          fontFamily: '"Dancing Script", cursive',
          fontOpticalSizing: 'auto',
          fontWeight: '700',
          fontStyle: 'normal',
        },
        // Tangerine Utilities
        '.tangerine-regular': {
          fontFamily: '"Tangerine", cursive',
          fontWeight: '400',
          fontStyle: 'normal',
        },
        '.tangerine-bold': {
          fontFamily: '"Tangerine", cursive',
          fontWeight: '700',
          fontStyle: 'normal',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
