import clsx from "clsx";

import { BakaComponent, BakaProps } from "../../../src/models";

export interface BakaListProps extends React.HTMLAttributes<HTMLUListElement>, BakaProps {}

export const BakaList: BakaComponent<"ul", BakaListProps> = (props) => {
  const { as: Component = "ul", ...other } = props;

  return <Component {...other} className={clsx("baka-list", props.className)} />;
};
