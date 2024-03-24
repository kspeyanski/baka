import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaTabProps = BakaStates<BakaDesign["TabState"]> &
  BakaVariant<BakaDesign["TabVariant"]> & {};

export type BakaTab = PolymorphicComponent<"div", BakaTabProps>;
export const BakaTab: BakaTab = (props) => {
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
        "baka-tab",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
