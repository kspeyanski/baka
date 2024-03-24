import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaTextFieldProps = BakaStates<BakaDesign["TextFieldState"]> &
  BakaVariant<BakaDesign["TextFieldVariant"]> & {};

export type BakaTextField = PolymorphicComponent<"span", BakaTextFieldProps>;
export const BakaTextField: BakaTextField = (props) => {
  const {
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
      {...other}
      disabled={disabled}
      className={clsx(
        "baka-text-field",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
