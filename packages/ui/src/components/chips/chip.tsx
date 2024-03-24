import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaChipProps = BakaStates<BakaDesign["ChipState"]> &
  BakaVariant<BakaDesign["ChipVariant"]> & {};

export type BakaChip = PolymorphicComponent<"span", BakaChipProps>;
export const BakaChip: BakaChip = (props) => {
  const {
    _ref,
    as: Component = "span",
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
        "baka-chip",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
