import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates } from "../../../src/models";
import { BakaDesign } from "baka-core";

export interface BakaMenuProps
  extends React.HTMLAttributes<HTMLUListElement>,
    BakaProps,
    BakaStates<BakaDesign["MenuState"]> {
  variant?: BakaDesign["MenuVariant"];
}

export const BakaMenu: BakaComponent<"ul", BakaMenuProps> = (props) => {
  const { as: Component = "ul", _ref, ...other } = props;

  return <Component ref={_ref} {...other} className={clsx("baka-menu", props.className)} />;
};
