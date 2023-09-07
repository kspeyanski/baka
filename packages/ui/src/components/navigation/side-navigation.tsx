import clsx from "clsx";

import { BakaComponent, BakaProps } from "../../../src/models";

export interface BakaSideNavigationProps extends React.HTMLAttributes<HTMLDivElement>, BakaProps {}

export const BakaSideNavigation: BakaComponent<"div", BakaSideNavigationProps> = (props) => {
  const { as: Component = "div", ...other } = props;

  return <Component {...other} className={clsx("baka-side-navigation", props.className)} />;
};
