const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontSize: {
      'base': ['18px', { lineHeight: '24px', fontWeight: '500' }],
      'm': ['24px', { lineHeight: '32px', fontWeight: '700' }],
      'l': ['48px', { lineHeight: '56px', letterSpacing: '-1.5px', fontWeight: '700' }],
      'xl': ['88px', { lineHeight: '88px', letterSpacing: '-2.5px', fontWeight: '700' }]
    },
    extend: {
      colors: {
        dark: {
          100: '#242424',
          200: '#151515'
        },
        light: {
          100: '#FFFFFF',
          200: '#D9D9D9'
        },
        green: '#4EE1A0'
      },
      fontFamily: {
        space: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
