import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { BakaDesign } from "baka-core";

export interface BakaBottomNavigationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BakaProps,
    BakaStates<BakaDesign["BottomNavigationState"]> {
  variant?: BakaVariant<BakaDesign["BottomNavigationVariant"]>;
}

export const BakaBottomNavigation: BakaComponent<"div", BakaBottomNavigationProps> = (props) => {
  const { as: Component = "div", ...other } = props;

  return <Component {...other} className={clsx("baka-bottom-navigation", props.className)} />;
};
