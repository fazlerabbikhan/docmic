/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        docmictheme: {
          primary: "#2D89FF",
          secondary: "#642DFF",
          paragraph: "#575757",
          text: "#1E1E1E",
          white: "#FFFFFF",
          background: "#F7F7F7",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          "--btn-text-case": "normal",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
