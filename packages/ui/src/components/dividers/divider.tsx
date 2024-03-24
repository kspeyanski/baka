import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaDividerProps = BakaStates<BakaDesign["DividerState"]> &
  BakaVariant<BakaDesign["DividerVariant"]> & {};

export type BakaDivider = PolymorphicComponent<"div", BakaDividerProps>;
export const BakaDivider: BakaDivider = (props) => {
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
        "baka-divider",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
