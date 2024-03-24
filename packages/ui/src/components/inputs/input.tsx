import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaInputProps = BakaStates<BakaDesign["InputState"]> &
  BakaVariant<BakaDesign["InputVariant"]> & {};

export type BakaInput = PolymorphicComponent<"input", BakaInputProps>;
export const BakaInput: BakaInput = (props) => {
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
      className={clsx(
        "baka-input",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
