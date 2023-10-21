import type { BakaColumnVariant } from "baka-core";
import clsx from "clsx";

import { BakaComponent, BakaProps, BakaVariant } from "../../../src/models";
import { variantClassNames } from "../../utils";

export interface BakaColumnProps extends React.HTMLAttributes<HTMLDivElement>, BakaProps {
  variant?: BakaVariant<BakaColumnVariant>; 
  count?: number;
}

export const BakaColumn: BakaComponent<"div", BakaColumnProps> = (props) => {
  const { as: Component = "div", variant, count, ...other } = props;

  return (
    <Component
      {...other}
      data-count={count}
      className={clsx("baka-column", props.className, variantClassNames(variant))}
    />
  );
};
