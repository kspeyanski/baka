import type { BakaDesign } from "baka-core";
import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export interface BakaSwitchProps
  extends React.HTMLAttributes<HTMLInputElement>,
    BakaProps,
    BakaStates<BakaDesign["SwitchState"]> {
  variant?: BakaVariant<BakaDesign["SwitchVariant"]>;
}

export const BakaSwitch: BakaComponent<"input", BakaSwitchProps> = (props) => {
  const {
    as: Component = "input",
    checked,
    indeterminate,
    hovered,
    focused,
    activated,
    disabled,
    variant,
    className,
    readOnly,
    ...other
  } = props;

  return (
    <Component
      type="checkbox"
      checked={checked}
      readOnly={readOnly}
      className={clsx("baka-switch", className, stateClassNames(props), variantClassNames(variant))}
      {...other}
    />
  );
};
