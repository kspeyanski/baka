import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export interface BakaTabProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BakaProps,
    BakaStates {}

export const BakaTab: BakaComponent<"div", BakaTabProps> = (props) => {
  const { as: Component = "div", variant, readOnly, disabled, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx(
        "baka-tab",
        props.className,
        stateClassNames(props),
        variantClassNames(variant)
      )}
    />
  );
};
