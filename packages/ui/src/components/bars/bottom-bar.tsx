import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates } from "../../../src/models";
import { BakaDesign } from "baka-core";

export interface BakaBottomBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BakaProps,
    BakaStates<BakaDesign["BottomBarState"]> {
  variant?: BakaDesign["BottomBarVariant"];
}

export const BakaBottomBar: BakaComponent<"div", BakaBottomBarProps> = (props) => {
  const { as: Component = "div", ...other } = props;

  return <Component {...other} className={clsx("baka-bottom-bar", props.className)} />;
};
