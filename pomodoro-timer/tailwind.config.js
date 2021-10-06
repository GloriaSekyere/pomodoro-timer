module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#E6E6E6',
          200: '#F2F2F2',
          300: '#E6E6E6',
          400: '#4D4D4D',
          500: '#333333'
        },
        blue: {
          100: '#2BA6CB',
          200: '#2184A1'
        },
        green: '#5CA422',
        red: '#960D0F'
      },
      width: {
        custom: '60rem',
      },
      height: {
        30: '7.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
