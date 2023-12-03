import type { BakaDesign } from "baka-core";
import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { variantClassNames } from "../../utils";

export interface BakaBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    BakaProps,
    BakaStates<BakaDesign["BadgeState"]> {
  variant?: BakaVariant<BakaDesign["BadgeVariant"]>;
}

export const BakaBadge: BakaComponent<"span", BakaBadgeProps> = (props) => {
  const { as: Component = "span", variant, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-badge", props.className, variantClassNames(variant))}
    />
  );
};
