import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaBadgeProps = BakaStates<BakaDesign["BadgeState"]> &
  BakaVariant<BakaDesign["BadgeVariant"]> & {};

export type BakaBadge = PolymorphicComponent<"span", BakaBadgeProps>;
export const BakaBadge: BakaBadge = (props) => {
  const { _ref,
    as: Component = "span", variant, ...other } = props;

  return (
    <Component
      ref={_ref}
      {...other}
      className={clsx(
        "baka-badge",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
