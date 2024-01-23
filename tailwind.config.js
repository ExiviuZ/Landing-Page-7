/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sen: ["Sen"],
    },
    extend: {
      colors: {
        transparent: "rgba(0,0,0,0)",
        "opaque-black": "rgba(0,0,0,0.4)",
      },
      fontSize: {
        clamp: "clamp(2.25rem, 1.3125rem + 3vw, 3rem);",
      },
    },
  },
  plugins: [],
};
