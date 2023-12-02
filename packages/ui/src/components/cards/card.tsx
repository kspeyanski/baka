import type { BakaDesign } from "baka-core";
import clsx from "clsx";

import { BakaComponent, BakaProps, BakaVariant } from "../../../src/models";
import { variantClassNames } from "../../utils";

export interface BakaCardProps extends React.HTMLAttributes<HTMLDivElement>, BakaProps {
  variant?: BakaVariant<BakaDesign["CardVariant"]>; 
}

export const BakaCard: BakaComponent<"div", BakaCardProps> = (props) => {
  const { as: Component = "div", variant, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-card", props.className, variantClassNames(variant))}
    />
  );
};
