import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaSwitchProps = BakaStates<BakaDesign["SwitchState"]> &
  BakaVariant<BakaDesign["SwitchVariant"]> & {};

export type BakaSwitch = PolymorphicComponent<"input", BakaSwitchProps>;
export const BakaSwitch: BakaSwitch = (props) => {
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
      type="checkbox"
      disabled={disabled}
      className={clsx(
        "baka-switch",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
