import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaVariant, PolymorphicComponent } from "../../../src/models";
import { variantClassNames } from "../../utils";
import { valueClassNames } from "../../utils/value-class-names";

export type BakaColumnProps = BakaVariant<BakaDesign["ColumnVariant"]> & {
  count?: number | Array<number>;
};

export type BakaColumn = PolymorphicComponent<"div", BakaColumnProps>;
export const BakaColumn: BakaColumn = (props) => {
  const { _ref,
    as: Component = "div", count, variant, ...other } = props;

  return (
    <Component
      ref={_ref}
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
