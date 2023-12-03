import { BakaStates } from "../../models/states";
import clsx from "clsx";
import { BakaDesign } from "baka-core";
import { BakaVariant } from "../../models/variant";
import { variantClassNames } from "../../utils";
import { BakaComponent } from "../../models/component";

export interface BakaIconProps
  extends React.HTMLAttributes<HTMLElement>,
    BakaStates<BakaDesign["IconState"]> {
  variant?: BakaVariant<BakaDesign["IconVariant"]>;
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
