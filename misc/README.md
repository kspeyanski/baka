<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://baka-ui.com/logo-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://baka-ui.com/logo-light.svg">
  <img alt="Shows the logo of the project. An origami followed by the Baka UI text" src="https://baka-ui.com/logo-light.svg">
</picture>

A super _dummy_ set of design system primitives

## Getting started

### Installation

1. Install the `ui` package

```bash
npm install baka-ui
```

2. Install the a `design` package

```bash
npm install baka-material-you
```

### Usage

```tsx
import { BakaButton } from "baka-ui";
import "baka-material-you/dist/index.css";

const App = () => <BakaButton>Click me</BakaButton>;
```

## Features

BakaUI embraces a `Less is more` philosophy. It provides a set of design system primitives which can be used to build complex UIs by following simple guidelines. Here are some of the features of `baka-ui` you can utilize to build your Design System.

### Composable

UI is composed from multiple atomic components to achieve more-complex designs.

```tsx
<BakaTextField>
  <BakaLabel>Label</BakaLabel>
  <BakaInput />
  <BakaButton>
    <BakaIcon>search</BakaIcon>
  </BakaButton>
</BakaTextField>
```

### Theming

Change the appearance of the components using themes & swatches by utilizing css & scss variables.

```scss
@use "baka-material-you" as material-you;
@use "baka-material-you/themes/dark" as dark-swatch;

:root {
  @include material-you.styles();

  @media screen and (prefers-color-scheme: dark) {
    @include dark-swatch.design-styles();
  }
}
```

### Tailwind Integration

BakaUI semlessly integrates with TailwindCSS by providing a [preset](https://tailwindcss.com/docs/presets) which can be used to extend the default TailwindCSS configuration and provide costitent look & feel between component-level & layout styles.

```js
// tailwind.config.js
module.exports = {
  // ...
  presets: [require("baka-material-you/tailwind")],
};
```

### Typescript Support

Apply contextual typings according to your design system.

```tsx
// The `variant` prop is typed according to the design system in use
<BakaButton variant={["filled", "icon"]}>Click me</BakaButton>
```

## Principles

The `baka-ui` is built on top of basic design system principles which are followed strictly.

### Modularity

Each design system is built by extracting common modules from it. For example, the `baka-material-you` design system exposes the following modules:

- `colors`
- `typography`
- `iconography`
- `elevation`
- `layout`
- `motion`

### Atomic Composition

Each component renders a exactly one _polymorphic_ element. UI is composed from multiple atomic components to achieve more-complex designs.

```tsx
<BakaTextField>
  <BakaTextField>
  <BakaLabel>Label</BakaLabel>
  <BakaInput />
  <BakaButton>
    <BakaIcon>search</BakaIcon>
  </BakaButton>
</BakaTextField>
```

### Variants

Each component has a set of variants which can be used to change the appearance of the component.

```tsx
<BakaButton variant="filled">Click me</BakaButton>
<BakaButton variant="text">Click me</BakaButton>
<BakaButton variant="outlined">Click me</BakaButton>
```

Variants can be combined to create more complex components.

```tsx
<BakaButton variant={["filled", "icon"]}>Click me</BakaButton>
```

### States

Each component has a set of states which can be used to change the appearance of the component based on the state.

```tsx
<BakaButton hovered={true}>Hovered</BakaButton>
<BakaButton selected={true}>Selected</BakaButton>
<BakaButton activated={true}>Pressed</BakaButton>
```
