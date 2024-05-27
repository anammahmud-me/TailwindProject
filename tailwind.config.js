/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      "sm": "450px",
      "md": "740px",
      "lg": "1050px",
    },
    fontFamily: {
      "nunito": "'Nunito', 'sans-serif'"
    },
    colors: {
      "hero": "#37517e",
      "white": "#ffffff",
      "secBg": "#f5f6f8",
      "sky": "#46afe0",
      "muted": "#c3cbd9",
      "gray": "#444444",
      "header": "#37517e",
      "btnColor": "#47b2e4",
      "check": "#0c9957",
    },
    extend: {},
  },
  plugins: [],
}

