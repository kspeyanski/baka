import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaMenuProps = BakaStates<BakaDesign["MenuState"]> &
  BakaVariant<BakaDesign["MenuVariant"]> & {};

export type BakaMenu = PolymorphicComponent<"div", BakaMenuProps>;
export const BakaMenu: BakaMenu = (props) => {
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
        "baka-menu",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
