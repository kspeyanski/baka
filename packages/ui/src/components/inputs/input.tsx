import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";
import { BakaDesign } from "baka-core";

export interface BakaInputProps
  extends React.HTMLAttributes<HTMLInputElement>,
    BakaProps,
    BakaStates<BakaDesign["InputState"]> {
  variant?: BakaVariant<BakaDesign["InputVariant"]>;
}

export const BakaInput: BakaComponent<"input", BakaInputProps> = (props) => {
  const {
    as: Component = "input",
    indeterminate,
    hovered,
    focused,
    activated,
    disabled,
    empty,
    variant,
    className,
    readOnly,
    value,
    ...other
  } = props;

  return (
    <Component
      type="text"
      value={value}
      readOnly={readOnly}
      className={clsx("baka-input", className, stateClassNames(props), variantClassNames(variant))}
      {...other}
    />
  );
};
