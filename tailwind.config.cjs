const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.tsx',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '4rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        outline: 'inset 0 0 0 1px hsl(0deg 0% 100% / 10%)',
      },
      borderRadius: {
        DEFAULT: defaultTheme.borderRadius.lg,
      },
      colors: {
        brand: colors.indigo,
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
