import clsx from "clsx";

import { BakaComponent, BakaProps } from "../../../src/models";

export interface BakaNavigationRailProps extends React.HTMLAttributes<HTMLDivElement>, BakaProps {}

export const BakaNavigationRail: BakaComponent<"div", BakaNavigationRailProps> = (props) => {
  const { as: Component = "div", ...other } = props;

  return <Component {...other} className={clsx("baka-navigation-rail", props.className)} />;
};
