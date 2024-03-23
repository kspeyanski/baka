/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/demos/material-you/**/*.{js,ts,jsx,tsx,mdx}"],
  important: "#material-you--demos",
  presets: [require("baka-material-you/tailwind")],
  theme: {},
  plugins: [],
};
