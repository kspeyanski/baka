import type { MultiVariant } from "baka-ui";
import type { BakaDesign as BakaDesignMaterialYou } from "baka-material-you/types/design";

declare module "baka-ui" {
  interface BakaDesignMaterialYouExtended extends BakaDesignMaterialYou {
    text: {
      variant: MultiVariant<BakaDesignMaterialYou["text"]['variant'] | "article">
    }
    /* TODO: custom components/variants/states here */
  }

  export interface BakaDesign extends BakaDesignMaterialYouExtended {}
}
