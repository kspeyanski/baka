import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { stateClassNames } from "../../utils";
import { BakaDesign } from "baka-core";

export interface BakaBottomNavigationItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BakaProps,
    BakaStates<BakaDesign["BottomNavigationItemState"]> {
  variant?: BakaVariant<BakaDesign["BottomNavigationItemVariant"]>;
}

export const BakaBottomNavigationItem: BakaComponent<"div", BakaBottomNavigationItemProps> = (
  props
) => {
  const { as: Component = "div", selected, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-bottom-navigation-item", props.className, stateClassNames(props))}
    />
  );
};
