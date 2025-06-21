/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/component/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#f59e42",
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '0.3' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(0)' },
        },
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        textFade: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '20%': { opacity: '1', transform: 'translateY(0)' },
          '80%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 3s infinite',
        ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'text-fade': 'textFade 5s ease-in-out infinite',
        gradient: 'gradient 15s ease infinite',
      }
    },
  },
  plugins: [],
};
