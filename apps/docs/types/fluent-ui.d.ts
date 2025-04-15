import type { BakaDesign as BakaDesignFluentUI } from "baka-fluent-ui";

declare module "baka-ui" {
  interface BakaDesignFluentUIExtended extends BakaDesignFluentUI {
    pre: {};
    code: {};
  }

  export interface BakaDesign extends BakaDesignFluentUIExtended {}
}
