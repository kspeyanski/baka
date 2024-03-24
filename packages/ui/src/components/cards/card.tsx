import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaCardProps = BakaStates<BakaDesign["CardState"]> &
  BakaVariant<BakaDesign["CardVariant"]> & {};

export type BakaCard = PolymorphicComponent<"div", BakaCardProps>;
export const BakaCard: BakaCard = (props) => {
  const {
    _ref,
    as: Component = "div",
    variant,
    selected,
    checked,
    readOnly,
    indeterminate,
    hovered,
    focused,
    activated,
    disabled,
    empty,
    valid,
    invalid,
    dragged,
    ...other
  } = props;

  return (
    <Component
      ref={_ref}
      {...other}
      disabled={disabled}
      className={clsx(
        "baka-card",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
