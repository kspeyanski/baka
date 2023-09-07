import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates } from "../../../src/models";
import { stateClassNames } from "../../utils";

export interface BakaSideNavigationItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BakaProps,
    BakaStates {}

export const BakaSideNavigationItem: BakaComponent<"div", BakaSideNavigationItemProps> = (props) => {
  const { as: Component = "div", selected, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx(
        "baka-side-navigation-item",
        props.className,
        stateClassNames(props)
      )}
    />
  );
};
