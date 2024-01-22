/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ColorDark: '#1c1d22',
        ColorGrey: '#eeeff4',
        ColorDarkGrey: '#535456',
        ColorWhite: '#fefffd',
        ColorRed: '#dc3545',
      },
      fontFamily: {
        sans: 'League Spartan, sans-serif',
      },
    },
  },
  plugins: [],
};
