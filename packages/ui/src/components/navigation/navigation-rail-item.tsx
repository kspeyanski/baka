import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { stateClassNames } from "../../utils";
import { BakaDesign } from "baka-core";

export interface BakaNavigationRailItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BakaProps,
    BakaStates<BakaDesign["NavigationRailItemState"]> {
  variant?: BakaVariant<BakaDesign["NavigationRailItemVariant"]>;
}

export const BakaNavigationRailItem: BakaComponent<"div", BakaNavigationRailItemProps> = (
  props
) => {
  const { as: Component = "div", selected, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-navigation-rail-item", props.className, stateClassNames(props))}
    />
  );
};
