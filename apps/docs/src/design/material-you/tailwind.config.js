const materialYou = require("baka-material-you/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      ...materialYou,
      screens: {
        xs: "0",
        sm: "600px",
        md: "905px",
        lg: "1240px",
        xl: "1440px",
      },
      spacing: {
        xxs: "2px",
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        xxl: "24px",
      },
    },
  },
  plugins: [],
};
