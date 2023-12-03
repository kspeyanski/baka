import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { BakaDesign } from "baka-core";

export interface BakaNavigationRailProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BakaProps,
    BakaStates<BakaDesign["NavigationRailState"]> {
  variant?: BakaVariant<BakaDesign["NavigationRailVariant"]>;
}

export const BakaNavigationRail: BakaComponent<"div", BakaNavigationRailProps> = (props) => {
  const { as: Component = "div", ...other } = props;

  return <Component {...other} className={clsx("baka-navigation-rail", props.className)} />;
};
