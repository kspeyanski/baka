import type { BakaDesign as BakaDesignMaterialYou } from "baka-material-you/types/design";

declare module "baka-ui" {
  interface BakaDesignMaterialYouExtended extends BakaDesignMaterialYou {
    /* TODO: custom components/variants/states here */
  }

  export interface BakaDesign extends BakaDesignMaterialYouExtended {}
}
