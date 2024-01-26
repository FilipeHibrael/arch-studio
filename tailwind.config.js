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
      gridTemplateColumns: {
        footer: 'auto 1fr auto'
      },
      boxShadow: {
        boxShadowFooter: 'inset -120px 0 0 0 white'
      }
    },
    screens: {
      '2xl': { max: '1340px' },
      xl: { max: '1280px' },
      lg: { max: '1080px' },
      md: { max: '860px' },
      sm: { max: '680px' },
      '2sm': { max: '480px' },
    },
  },
  plugins: [],
};
