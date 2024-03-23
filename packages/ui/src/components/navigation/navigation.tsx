import clsx from "clsx";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { BakaDesign } from "baka-core";
import { variantClassNames } from "../../utils";

export interface BakaNavigationProps extends BakaStates<BakaDesign["NavigationState"]> {
  variant?: BakaVariant<BakaDesign["NavigationVariant"]>;
}

export type BakaNavigation = PolymorphicComponent<"div", BakaNavigationProps>;
export const BakaNavigation: BakaNavigation = (props) => {
  const { as: Component = "div", variant, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-navigation", props.className, variantClassNames(variant))}
    />
  );
};
