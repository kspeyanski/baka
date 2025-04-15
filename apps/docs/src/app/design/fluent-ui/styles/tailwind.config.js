/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/design/fluent-ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/design/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: "#fluent-ui",
  presets: [require("baka-fluent-ui/tailwind")],
  theme: {
    extend: {
      screens: {
        xs: "0",
        sm: "320px",
        md: "480px",
        lg: "640px",
        xl: "1024px",
        xxl: "1366px",
        xxxl: "1920px",
      },
    },
  },
  plugins: [],
};
