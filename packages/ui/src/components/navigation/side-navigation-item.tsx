import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { stateClassNames } from "../../utils";
import { BakaDesign } from "baka-core";

export interface BakaSideNavigationItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BakaProps,
    BakaStates<BakaDesign["SideNavigationItemState"]> {
  variant?: BakaVariant<BakaDesign["SideNavigationItemVariant"]>;
}

export const BakaSideNavigationItem: BakaComponent<"div", BakaSideNavigationItemProps> = (
  props
) => {
  const { as: Component = "div", selected, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-side-navigation-item", props.className, stateClassNames(props))}
    />
  );
};
