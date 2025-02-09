import type { BakaDesign as BakaDesignFluentUI } from "baka-fluent-ui";

declare module "baka-ui" {
  interface BakaDesignFluentUIExtended extends BakaDesignFluentUI {
    /* TODO: custom components/variants/states here */
  }

  export interface BakaDesign extends BakaDesignFluentUIExtended {}
}
