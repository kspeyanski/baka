import type { BakaDesign } from "baka-core";
import clsx from "clsx";

import { BakaComponent, BakaStates, BakaVariant } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export interface BakaCheckboxProps
  extends React.HTMLAttributes<HTMLInputElement>,
    BakaStates<BakaDesign["CheckboxState"]> {
  variant?: BakaVariant<BakaDesign["CheckboxVariant"]>;
}

export const BakaCheckbox: BakaComponent<"input", BakaCheckboxProps> = (props) => {
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
      className={clsx(
        "baka-checkbox",
        className,
        stateClassNames(props),
        variantClassNames(variant)
      )}
      {...other}
    />
  );
};
