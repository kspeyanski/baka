import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaIconProps = BakaStates<BakaDesign["IconState"]> &
  BakaVariant<BakaDesign["IconVariant"]> & {};

export type BakaIcon = PolymorphicComponent<"ul", BakaIconProps>;
export const BakaIcon: BakaIcon = (props) => {
  const {
    _ref,
    as: Component = "ul",
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
        "baka-icon",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
