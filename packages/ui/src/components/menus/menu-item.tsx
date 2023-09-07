import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { stateClassNames } from "../../utils";

export interface BakaMenuItemProps
  extends React.HTMLAttributes<HTMLLIElement>,
    BakaProps,
    BakaStates {}

export const BakaMenuItem: BakaComponent<"li", BakaMenuItemProps> = (props) => {
  const { as: Component = "li", readOnly, disabled, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-menu-item", props.className, stateClassNames(props))}
    />
  );
};
