import type { BakaBadgeVariant } from "baka--core";
import clsx from "clsx";

import { BakaComponent, BakaProps, BakaVariant } from "../../../src/models";
import { variantClassNames } from "../../utils";

export interface BakaBadgeProps extends React.HTMLAttributes<HTMLSpanElement>, BakaProps {
  variant?: BakaVariant<BakaBadgeVariant>;
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
