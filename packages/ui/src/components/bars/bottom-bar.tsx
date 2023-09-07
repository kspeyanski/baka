import clsx from "clsx";

import { BakaComponent, BakaProps } from "../../../src/models";

export interface BakaBottomBarProps extends React.HTMLAttributes<HTMLDivElement>, BakaProps {}

export const BakaBottomBar: BakaComponent<"div", BakaBottomBarProps> = (props) => {
  const { as: Component = "div", ...other } = props;

  return <Component {...other} className={clsx("baka-bottom-bar", props.className)} />;
};
