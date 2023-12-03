import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates } from "../../../src/models";
import { BakaDesign } from "baka-core";

export interface BakaListProps
  extends React.HTMLAttributes<HTMLElement>,
    BakaProps,
    BakaStates<BakaDesign["ListState"]> {
  variant?: BakaDesign["ListVariant"];
}

export const BakaList: BakaComponent<"ul", BakaListProps> = (props) => {
  const { as: Component = "ul", ...other } = props;

  return <Component {...other} className={clsx("baka-list", props.className)} />;
};
