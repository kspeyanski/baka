import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates } from "../../../src/models";
import { stateClassNames } from "../../utils";

export interface BakaBottomNavigationItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BakaProps,
    BakaStates {}

export const BakaBottomNavigationItem: BakaComponent<"div", BakaBottomNavigationItemProps> = (props) => {
  const { as: Component = "div", selected, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-bottom-navigation-item", props.className, stateClassNames(props))}
    />
  );
};
