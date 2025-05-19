/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Angular
  ],
  theme: {
    extend: {
      transitionDuration: {
        '1200': '1200ms',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "pastel", "abyss", "dim"],
  },
}

