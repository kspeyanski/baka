import clsx from "clsx";

import { BakaComponent, BakaProps } from "../../../src/models";

export interface BakaMenuProps extends React.HTMLAttributes<HTMLUListElement>, BakaProps {}

export const BakaMenu: BakaComponent<"ul", BakaMenuProps> = (props) => {
  const { as: Component = "ul", ...other } = props;

  return <Component {...other} className={clsx("baka-menu", props.className)} />;
};
