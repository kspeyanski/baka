declare module "baka-core" {
  import { BakaDesignMaterialYou } from "baka-material-you/types/design";

  export interface BakaDesign extends BakaDesignMaterialYou {
    HeadingVariant: BakaDesignMaterialYou["HeadingVariant"] | "article";
    TextVariant: BakaDesignMaterialYou["TextVariant"] | "article";
    ParagraphVariant: BakaDesignMaterialYou["ParagraphVariant"] | "article";
  }
}
