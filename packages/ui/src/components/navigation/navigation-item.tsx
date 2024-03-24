import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaNavigationItemProps = BakaStates<BakaDesign["NavigationItemState"]> &
  BakaVariant<BakaDesign["NavigationItemVariant"]> & {};

export type BakaNavigationItem = PolymorphicComponent<"div", BakaNavigationItemProps>;
export const BakaNavigationItem: BakaNavigationItem = (props) => {
  const {
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
      {...other}
      disabled={disabled}
      className={clsx(
        "baka-navigation-item",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
