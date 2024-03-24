import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaCheckboxProps = BakaStates<BakaDesign["CheckboxState"]> &
  BakaVariant<BakaDesign["CheckboxVariant"]> & {};

export type BakaCheckbox = PolymorphicComponent<"input", BakaCheckboxProps>;
export const BakaCheckbox: BakaCheckbox = (props) => {
  const {
    _ref,
    as: Component = "input",
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
      type="checkbox"
      className={clsx(
        "baka-checkbox",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
