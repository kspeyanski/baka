import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaRadioProps = BakaStates<BakaDesign["RadioState"]> &
  BakaVariant<BakaDesign["RadioVariant"]> & {};

export type BakaRadio = PolymorphicComponent<"input", BakaRadioProps>;
export const BakaRadio: BakaRadio = (props) => {
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
      type="radio"
      disabled={disabled}
      className={clsx(
        "baka-radio",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
