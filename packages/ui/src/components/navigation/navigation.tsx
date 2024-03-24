import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaNavigationProps = BakaStates<BakaDesign["NavigationState"]> &
  BakaVariant<BakaDesign["NavigationVariant"]> & {};

export type BakaNavigation = PolymorphicComponent<"div", BakaNavigationProps>;
export const BakaNavigation: BakaNavigation = (props) => {
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
        "baka-navigation",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
