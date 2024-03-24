import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaTabGroupProps = BakaStates<BakaDesign["TabGroupState"]> &
  BakaVariant<BakaDesign["TabGroupVariant"]> & {};

export type BakaTabGroup = PolymorphicComponent<"div", BakaTabGroupProps>;
export const BakaTabGroup: BakaTabGroup = (props) => {
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
        "baka-tab-group",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
