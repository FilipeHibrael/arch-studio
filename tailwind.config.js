/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ColorDark: '#1c1d22',
        ColorLightGrey: '#f0f0f5',
        ColorGrey: '#c9cdd9',
        ColorDarkGrey: '#60636c',
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
