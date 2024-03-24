import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaVariant, PolymorphicComponent } from "../../../src/models";
import { variantClassNames } from "../../utils";

export type BakaRowProps = BakaVariant<BakaDesign["RowVariant"]> & {};

export type BakaRow = PolymorphicComponent<"div", BakaRowProps>;
export const BakaRow: BakaRow = (props) => {
  const { _ref,
    as: Component = "div", variant, ...other } = props;

  return (
    <Component
      ref={_ref}
      {...other}
      className={clsx("baka-row", props.className, variantClassNames(variant))}
    />
  );
};
