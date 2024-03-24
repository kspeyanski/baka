import type { BakaDesignMaterialYou } from "./design";

declare module "baka-core" {
  export interface BakaDesign extends BakaDesignMaterialYou {}
}
