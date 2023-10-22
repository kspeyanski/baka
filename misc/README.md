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
