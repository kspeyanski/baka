import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaBarProps = BakaStates<BakaDesign["BarState"]> &
  BakaVariant<BakaDesign["BarVariant"]> & {};

export type BakaBar = PolymorphicComponent<"span", BakaBarProps>;
export const BakaBar: BakaBar = (props) => {
  const {
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
      {...other}
      className={clsx(
        "baka-bar",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
