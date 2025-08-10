// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradientBG 15s ease infinite',
      },
      keyframes: {
        gradientBG: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
    },
  },
};
