import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaTooltipProps = BakaStates<BakaDesign["TooltipState"]> &
  BakaVariant<BakaDesign["TooltipVariant"]> & {};

export type BakaTooltip = PolymorphicComponent<"div", BakaTooltipProps>;
export const BakaTooltip: BakaTooltip = (props) => {
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
        "baka-tooltip",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
