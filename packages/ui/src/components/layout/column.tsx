import type { BakaDesign } from "baka-core";
import clsx from "clsx";

import { BakaComponent, BakaProps, BakaVariant } from "../../../src/models";
import { variantClassNames } from "../../utils";
import { valueClassNames } from "../../utils/value-class-names";

export interface BakaColumnProps extends React.HTMLAttributes<HTMLDivElement>, BakaProps {
  variant?: BakaVariant<BakaDesign["ColumnVariant"]>;
  count?: number | Array<number>;
}

export const BakaColumn: BakaComponent<"div", BakaColumnProps> = (props) => {
  const { as: Component = "div", variant, count, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx(
        "baka-column",
        props.className,
        variantClassNames(variant),
        valueClassNames(count)
      )}
    />
  );
};
