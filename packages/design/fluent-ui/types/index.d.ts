import type { BakaDesignFluentUI } from "./design";

declare module "baka-core" {
  export interface BakaDesign extends BakaDesignFluentUI {}
}
