import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { stateClassNames } from "../../utils";
import { BakaDesign } from "baka-core";

export interface BakaMenuItemProps
  extends React.HTMLAttributes<HTMLLIElement>,
    BakaProps,
    BakaStates<BakaDesign["MenuItemState"]> {
  variant?: BakaVariant<BakaDesign["MenuItemVariant"]>;
}

export const BakaMenuItem: BakaComponent<"li", BakaMenuItemProps> = (props) => {
  const { as: Component = "li", readOnly, selected, hovered, disabled, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-menu-item", props.className, stateClassNames(props))}
    />
  );
};
