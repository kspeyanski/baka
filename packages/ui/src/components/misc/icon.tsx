import { BakaStates } from "../../models/states";
import clsx from "clsx";
import { BakaIconVariant } from "baka--core";
import { BakaVariant } from "../../models/variant";
import { variantClassNames } from "../../utils";
import { BakaComponent } from "../../models/component";

export interface BakaIconProps extends React.HTMLAttributes<HTMLElement>, BakaStates {
  variant?: BakaVariant<BakaIconVariant>;
}

export const BakaIcon: BakaComponent<"i", BakaIconProps> = (props) => {
  const {
    as: Component = "i",
    variant,
    selected,
    hovered,
    focused,
    activated,
    disabled,
    ...other
  } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-icon", props.className, variantClassNames(variant))}
    />
  );
};
