/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/app/design/fluent-2/**/*.{js,ts,jsx,tsx,mdx}"],
    important: "#fluent-2",
    presets: [require("baka-fluent-2/tailwind")],
    plugins: [],
  };
  