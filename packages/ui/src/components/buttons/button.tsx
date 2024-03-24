import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaButtonProps = BakaStates<BakaDesign["ButtonState"]> &
  BakaVariant<BakaDesign["ButtonVariant"]> & {};

export type BakaButton = PolymorphicComponent<"button", BakaButtonProps>;
export const BakaButton: BakaButton = (props) => {
  const {
    _ref,
    as: Component = "button",
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
        "baka-button",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
