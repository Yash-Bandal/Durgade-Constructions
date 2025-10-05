// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        starling: ['starling', 'serif'],
        fieldwork: ['fieldwork', 'sans-serif'],
        'fieldwork-hum': ['fieldwork-hum', 'sans-serif'],
      },
      colors: {
        borderPrimary: '#c17339',
        bgLight: '#f2f2f2',
        textDark: '#3e3e3e',
        headingDark: '#161618',
        gold:'#af9936'
      },
      spacing: {
        mini: '30px',
        tiny: '40px',
        small: '60px',
        medium: '70px',
        large: '80px',
        huge: '120px',
        gigantic: '200px',
      },
      screens: {
        md910: "910px",
      },
    },
  },
  plugins: [],
};