import type { MultiVariant } from "baka-ui";

declare module "baka-ui" {
  interface BakaDesignKatana {
    ["design-system-card"]: {};
    button: {
      variant: MultiVariant<"cta" | "secondary">;
    };
    text: {
      variant: MultiVariant<
        | "hero"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "sub-hero"
        | "body-large"
        | "body"
        | "body-small"
        | "code"
      >;
    };
  }

  export interface BakaDesign extends BakaDesignKatana {}
}
