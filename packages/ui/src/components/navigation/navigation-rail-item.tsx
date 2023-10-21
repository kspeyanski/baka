import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates } from "../../../src/models";
import { stateClassNames } from "../../utils";

export interface BakaNavigationRailItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BakaProps,
    BakaStates {}

export const BakaNavigationRailItem: BakaComponent<"div", BakaNavigationRailItemProps> = (props) => {
  const { as: Component = "div", selected, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx(
        "baka-navigation-rail-item",
        props.className,
        stateClassNames(props)
      )}
    />
  );
};
