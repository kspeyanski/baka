import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaMenuItemProps = BakaStates<BakaDesign["MenuItemState"]> &
  BakaVariant<BakaDesign["MenuItemVariant"]> & {};

export type BakaMenuItem = PolymorphicComponent<"div", BakaMenuItemProps>;
export const BakaMenuItem: BakaMenuItem = (props) => {
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
        "baka-menu-item",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
