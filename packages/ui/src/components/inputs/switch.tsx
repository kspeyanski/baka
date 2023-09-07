import type { BakaSwitchStates, BakaSwitchVariant } from "@baka/design-core";
import clsx from "clsx";

import { BakaComponent, BakaProps, BakaVariant } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export interface BakaSwitchProps
  extends React.HTMLAttributes<HTMLInputElement>,
    BakaProps,
    BakaSwitchStates {
  variant?: BakaVariant<BakaSwitchVariant>; 
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
