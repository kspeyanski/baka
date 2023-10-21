<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/kspeyanski/baka/assets/30626787/e083dbed-284e-47ca-847e-9bec143b38c1">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/kspeyanski/baka/assets/30626787/6cd27ca0-bdfd-481c-8bad-334234964281">
  <img alt="Shows the logo of the project. An origami followed by the Baka UI text" src="https://github.com/kspeyanski/baka/assets/30626787/6cd27ca0-bdfd-481c-8bad-334234964281">
</picture>

A super _dummy_ set of design system primitives

## Getting started

### Installation

1. Install the `ui` package

```bash
npm install baka-ui
```

2. Install the a `styles` package

```bash
npm install baka-material-you
```

### Usage

```tsx
import { BakaButton } from "baka-ui";
import "baka-material-you/dist/index.css";

const App = () => <BakaButton>Click me</BakaButton>;
```

### Typescript

This project is written in Typescript and publishes its types to npm. This means you don't need to install any additional packages to use the types.

However, it's design to have design-specific types for the `variant` property of the components. To use it, reference the `index.d.ts` file of the corresponding design in your `tsconfig.json` file.

```json
{
  "compilerOptions": {
    "types": ["baka-material-you/index.d.ts"]
  }
}
```
