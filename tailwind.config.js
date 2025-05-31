/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Angular
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px'
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.500rem',
      },
      transitionDuration: {
        '1200': '1200ms',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", {
      pastel: {
        ...require("daisyui/src/theming/themes")["pastel"],
        "primary": "#A0E88E",
      }
    }, "abyss", "dim"],
  },
}

