const materialYou = require("baka-material-you/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/demos/material-you/**/*.{js,ts,jsx,tsx,mdx}"],
  important: "#material-you--demos",
  theme: {
    extend: {
      ...materialYou,
    },
  },
  plugins: [],
};
