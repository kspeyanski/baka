/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/(root)/**/*.{js,ts,jsx,tsx,mdx}"],
  important: "#katana",
  theme: {
    extend: {
      colors: {
        "black": "#000000",
        "brand-foreground-1": "var(--swatch--brand-foreground-1)",
        "brand-background-1": "var(--swatch--brand-background-1)",
        "brand-background-2": "var(--swatch--brand-background-2)",
        "neutral-background-static": "var(--swatch--neutral-background-static)",
        "neutral-background-2": "var(--swatch--neutral-background-2)",
        "neutral-background-3": "var(--swatch--neutral-background-3)",
      },
      fontFamily: {
        sans: ["var(--typography--font-family--sans)"],
        mono: ["var(--typography--font-family--mono)"],
        serif: ["var(--typography--font-family--serif)"],
      },
      fontSize: {
        base: "var(--typography--font-size--base)",
        h1: "var(--typography--font-size--h1)",
        h2: "var(--typography--font-size--h2)",
        h3: "var(--typography--font-size--h3)",
        h4: "var(--typography--font-size--h4)",
        h5: "var(--typography--font-size--h5)",
        h6: "var(--typography--font-size--h6)",
        "body-large": "var(--typography--font-size--body-large)",
        body: "var(--typography--font-size--body-large)",
        "body-small": "var(--typography--font-size--body-small)",
      },
      lineHeight: {
        heading: "var(--typography--line-height--heading)",
        body: "var(--typography--line-height--body)",
      },
      spacing: {
        xxs: "var(--spacing--xxs)",
        xs: "var(--spacing--xs)",
        sm: "var(--spacing--sm)",
        md: "var(--spacing--md)",
        lg: "var(--spacing--lg)",
        xl: "var(--spacing--xl)",
        xxl: "var(--spacing--xxl)",
      },
    },
  },
  plugins: [],
};
