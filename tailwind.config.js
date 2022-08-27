/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
       "base": '#212121',
       "primary": '#FFFFE3',
       "light": '#FDFCFD',
       "disabled": '#1E1E1E59',
        "blueLight": '#00F0FF59',
        "gradTop": '#FF1CF7',
        "gradBottom": '#00F0FF',
        "accentOne": '#00F0FF',
        "danger": '#FF3D00',
      },
    },
  },
  plugins: [],
}
