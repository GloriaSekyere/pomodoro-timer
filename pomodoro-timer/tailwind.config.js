const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F2F2F2',
          200: '#E9E9E9',
          300: '#E6E6E6',
          400: '#E1E1E1',
          500: '#4D4D4D',
          600: '#333333'
        },
        blue: {
          100: '#9FD4E5',
          200: '#2BA6CB',
          300: '#2184A1'
        },
        green: {
          100: '#B0D297',
          200: '#5CA422',
          300: '#529220',
          400: '#386516'
        },
        red: {
          100: '#E7918E',
          200:'#C70F13',
          300: '#960D0F',
          400: '#7E0A0C',
        },
      },
      width: {
        custom26: '26rem',
        custom28: '28rem',
        custom50: '50rem',
        custom60: '60rem',
      },
      height: {
        30: '7.5rem',
      },
      borderWidth: {
          '1': '1px',
      },
    },
  },

  variants: {
    extend: {
      backgroundColor: [
        'before',
        'after',
      ],
      position: [
        'before',
        'after',
      ],
      height: [
        'before',
        'after',
      ],
      width: [
        'before',
        'after',
      ],
      borderRadius: [
        'before',
        'after',
      ],
      display: [
        'before',
        'after',
      ],
      inset: [
        'before',
        'after',
      ],
    },
  },

  plugins: [
    require('tailwindcss-pseudo-elements'),
    plugin(({addUtilities}) => {
      const newUtilities = {
        ".empty-content": {
          content: "''",
        },
      }
      addUtilities(newUtilities, {
        variants: ["before", "after"],
      });
    })
  ],
}
