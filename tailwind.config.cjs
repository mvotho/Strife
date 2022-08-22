/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "flamingo":"#f25939",
      "mineshaft":"#292929",
      "dustgray": "#949494",
      "whisper": "#f3f2f7",
      "elm":"#1b6c86"
    }
  },
  plugins: [],
}
