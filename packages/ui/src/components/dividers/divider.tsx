import type { BakaDesign } from "baka-core";
import clsx from "clsx";

import { BakaComponent, BakaProps, BakaVariant } from "../../../src/models";
import { variantClassNames } from "../../utils";

export interface BakaDividerProps extends React.HTMLAttributes<HTMLDivElement>, BakaProps {
  variant?: BakaVariant<BakaDesign["DividerVariant"]>; 
}

export const BakaDivider: BakaComponent<"div", BakaDividerProps> = (props) => {
  const {
    as: Component = "div",
    selected,
    hovered,
    focused,
    activated,
    disabled,
    variant,
    dragged,
    ...other
  } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-divider", props.className, variantClassNames(variant))}
    />
  );
};
