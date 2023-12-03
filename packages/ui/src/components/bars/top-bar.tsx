import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { BakaDesign } from "baka-core";
import { variantClassNames } from "../../utils";

export interface BakaTopBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BakaProps,
    BakaStates<BakaDesign["TopBarState"]> {
  variant?: BakaVariant<BakaDesign["TopBarVariant"]>;
}

export const BakaTopBar: BakaComponent<"div", BakaTopBarProps> = (props) => {
  const { as: Component = "div", variant, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-top-bar", props.className, variantClassNames(variant))}
    />
  );
};
