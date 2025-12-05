// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      keyframes: {
        'scroll-y-long': {
          '0%': { backgroundPosition: 'top' },
          '100%': { backgroundPosition: 'bottom' },
        },
      },
      animation: {
        'scroll-y-long': 'scroll-y-long 4s linear forwards',
      },
    },
  },
  plugins: [],
};