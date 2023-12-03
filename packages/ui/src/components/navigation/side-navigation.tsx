import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { BakaDesign } from "baka-core";

export interface BakaSideNavigationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BakaProps,
    BakaStates<BakaDesign["SideNavigationState"]> {
  variant?: BakaVariant<BakaDesign["SideNavigationVariant"]>;
}

export const BakaSideNavigation: BakaComponent<"div", BakaSideNavigationProps> = (props) => {
  const { as: Component = "div", ...other } = props;

  return <Component {...other} className={clsx("baka-side-navigation", props.className)} />;
};
