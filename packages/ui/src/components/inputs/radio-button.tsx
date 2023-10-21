import clsx from "clsx";

import { BakaComponent, BakaProps } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";
import { BakaRadioButtonStates } from "baka--core";

export interface BakaRadioButtonProps
  extends React.HTMLAttributes<HTMLInputElement>,
    BakaProps,
    BakaRadioButtonStates {}

export const BakaRadioButton: BakaComponent<"input", BakaRadioButtonProps> = (props) => {
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
      type="radio"
      checked={checked}
      readOnly={readOnly}
      className={clsx(
        "baka-radio-button",
        className,
        stateClassNames(props),
        variantClassNames(variant)
      )}
      {...other}
    />
  );
};
