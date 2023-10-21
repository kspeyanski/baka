import type { BakaButtonStates, BakaButtonVariant } from "baka-core";
import clsx from "clsx";
import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export interface BakaButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    BakaProps,
    BakaButtonStates {
  variant?: BakaVariant<BakaButtonVariant>;
}

export const BakaButton: BakaComponent<"button", BakaButtonProps> = (props) => {
  const {
    as: Component = "button",
    selected,
    hovered,
    focused,
    activated,
    disabled,
    variant,
    ...other
  } = props;

  return (
    <Component
      {...other}
      className={clsx(
        "baka-button",
        props.className,
        stateClassNames(props),
        variantClassNames(variant)
      )}
    />
  );
};
