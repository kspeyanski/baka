import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaTextProps = BakaStates<BakaDesign["TextState"]> &
  BakaVariant<BakaDesign["TextVariant"]> & {};

export type BakaText = PolymorphicComponent<"span", BakaTextProps>;
export const BakaText: BakaText = (props) => {
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
        "baka-text",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
