/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "3.75rem",
      },
      height: {
        100: "40rem",
      },
      colors: {
        sun: {
          white: "#F9F7F4",
          black: "#213B62",
          blue: "#6592FD",
          purple: "#C283D9",
          "yellow-lighter": "#FFDE97",
          "yellow-light": "#FFD579",
          yellow: "#FFC340",
          "yellow-dark": "#FFAF00",
          orange: "#EC7346",
          green: "#6BC68A",
          pink: "#E42FE4",
          "gray-50": "#F7FAFC",
          "gray-100": "#F0F5F8",
          "gray-200": "#EAF0F4",
        },
      },
    },
    plugins: [],
  },
};
