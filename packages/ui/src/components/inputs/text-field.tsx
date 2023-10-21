import type { BakaTextFieldVariant } from "baka--core";
import clsx from "clsx";

import { BakaComponent, BakaStates, BakaVariant } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export interface BakaTextFieldProps extends React.HTMLAttributes<HTMLInputElement>, BakaStates {
  variant?: BakaVariant<BakaTextFieldVariant>;
}

export const BakaTextField: BakaComponent<"span", BakaTextFieldProps> = (props) => {
  const {
    as: Component = "span",
    checked,
    indeterminate,
    hovered,
    focused,
    activated,
    disabled,
    variant,
    className,
    readOnly,
    valid,
    invalid,
    ...other
  } = props;

  return (
    <Component
      type="text-field"
      checked={checked}
      readOnly={readOnly}
      className={clsx(
        "baka-text-field",
        className,
        stateClassNames(props),
        variantClassNames(variant)
      )}
      {...other}
    />
  );
};
