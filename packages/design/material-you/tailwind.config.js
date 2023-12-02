/** @type {import('tailwindcss').Config} */
module.exports = {
  fontFamily: {
    sans: ["--typography--font-family--sans"],
    serif: ["--typography--font-family--serif"],
    mono: ["--typography--font-family--mono"],
  },
  fontSize: {
    "7xl": ["--typography--font-size--display-large"],
    "6xl": ["--typography--font-size--display-medium"],
    "5xl": ["--typography--font-size--display-small"],
    "4xl": ["--typography--font-size--headline-large"],
    "3xl": ["--typography--font-size--headline-medium"],
    "2xl": ["--typography--font-size--headline-small"],
    xl: ["--typography--font-size--title-large"],
    lg: ["--typography--font-size--body-large"],
    base: ["--typography--font-size--body-medium"],
    sm: ["--typography--font-size--body-small"],
    xs: ["--typography--font-size--label-small"],
  },
  letterSpacing: {
    tightest: ["--typography--letter-spacing--display-large"],
    tighter: ["--typography--letter-spacing--title-small"],
    tight: ["--typography--letter-spacing--title-medium"],
    normal: ["--typography--letter-spacing--body-medium"],
    wide: ["--typography--letter-spacing--body-small"],
    wider: ["--typography--letter-spacing--body-small"],
    widest: ["--typography--letter-spacing--body-large"],
  },
  lineHeight: {
    loose: ["--typography--line-height--title-large"],
    relaxed: ["--typography--line-height--title-medium"],
    normal: ["--typography--line-height--body-medium"],
    tight: ["--typography--line-height--label-medium"],
    snug: ["--typography--line-height--label-small"],
  },
  screens: {
    xs: ["--layout--screen-xs"],
    sm: ["--layout--screen-sm"],
    md: ["--layout--screen-md"],
    lg: ["--layout--screen-lg"],
    xl: ["--layout--screen-xl"],
  },
  // TODO: spacing
};
