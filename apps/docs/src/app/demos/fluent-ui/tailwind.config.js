/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/demos/fluent-ui/**/*.{js,ts,jsx,tsx,mdx}"],
  important: "#fluent-ui--demos",
  presets: [require("baka-fluent-ui/tailwind")],
  theme: {},
  plugins: [],
};
