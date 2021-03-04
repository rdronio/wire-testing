module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#556B86',
          DEFAULT: '#00224A',
          dark: '#001631',
        },
        secondary: {
          light: '#5A9175',
          DEFAULT: '#085A30',
          dark: '#053C20',
        },
        tertiary: {
          light: '#FBBA7B',
          DEFAULT: '#F99839',
          dark: '#A66526',
        },
        gray: {
          dark: '#EBECF0',
          DEFAULT: '#42526E',
          light: '#FAFBFC',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
