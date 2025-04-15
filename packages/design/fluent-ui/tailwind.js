/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      "brand-foreground-1": "var(--swatch--brand-foreground-1)",
      "brand-background-1": "var(--swatch--brand-background-1)",
      "brand-background-2": "var(--swatch--brand-background-2)",
      "neutral-background-static": "var(--swatch--neutral-background-static)",
      "neutral-background-1": "var(--swatch--neutral-background-1)",
      "neutral-background-2": "var(--swatch--neutral-background-2)",
      "neutral-background-3": "var(--swatch--neutral-background-3)",
      'neutral-stroke-1': 'var(--swatch--neutral-stroke-1)',
    },
    boxShadow: {
      DEFAULT: "var(--elevation--4)",
      2: "var(--elevation--2)",
      ["brand-2"]: "var(--elevation--brand-2)",
      4: "var(--elevation--4)",
      md: "var(--elevation--4)",
      ["brand-4"]: "var(--elevation--brand-4)",
      8: "var(--elevation--8)",
      ["brand-8"]: "var(--elevation--brand-8)",
      16: "var(--elevation--16)",
      ["brand-16"]: "var(--elevation--brand-16)",
      28: "var(--elevation--28)",
      ["brand-28"]: "var(--elevation--brand-28)",
      64: "var(--elevation--64)",
      ["brand-64"]: "var(--elevation--brand-64)",
    },
  },
};
