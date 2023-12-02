import type { BakaDesign } from "baka-core";
import clsx from "clsx";

import { BakaComponent, BakaProps, BakaVariant } from "../../../src/models";
import { variantClassNames } from "../../utils";

export interface BakaTooltipProps extends React.HTMLAttributes<HTMLDivElement>, BakaProps {
  variant?: BakaVariant<BakaDesign["TooltipVariant"]>; 
}

export const BakaTooltip: BakaComponent<"div", BakaTooltipProps> = (props) => {
  const {
    as: Component = "div",
    selected,
    hovered,
    focused,
    activated,
    disabled,
    variant,
    ...other
  } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-tooltip", props.className, variantClassNames(variant))}
    />
  );
};
