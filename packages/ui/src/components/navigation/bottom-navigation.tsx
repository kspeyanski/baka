import clsx from "clsx";

import { BakaComponent, BakaProps } from "../../../src/models";

export interface BakaBottomNavigationProps extends React.HTMLAttributes<HTMLDivElement>, BakaProps {}

export const BakaBottomNavigation: BakaComponent<"div", BakaBottomNavigationProps> = (props) => {
  const { as: Component = "div", ...other } = props;

  return <Component {...other} className={clsx("baka-bottom-navigation", props.className)} />;
};
