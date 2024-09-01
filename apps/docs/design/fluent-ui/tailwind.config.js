/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/app/design/fluent-ui/**/*.{js,ts,jsx,tsx,mdx}"],
    important: "#fluent-ui",
    presets: [require("baka-fluent-ui/tailwind")],
    plugins: [],
  };
  