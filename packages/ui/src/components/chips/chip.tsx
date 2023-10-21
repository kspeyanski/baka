import type { BakaChipVariant } from "baka--core";
import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export interface BakaChipProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    BakaProps,
    BakaStates {
  variant?: BakaVariant<BakaChipVariant>; 
}

export const BakaChip: BakaComponent<"span", BakaChipProps> = (props) => {
  const {
    as: Component = "span",
    selected,
    hovered,
    focused,
    activated,
    disabled,
    variant,
    dragged,
    ...other
  } = props;

  return (
    <Component
      {...other}
      className={clsx(
        "baka-chip",
        props.className,
        stateClassNames(props),
        variantClassNames(variant)
      )}
    />
  );
};
