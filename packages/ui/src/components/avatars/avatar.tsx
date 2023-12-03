import clsx from "clsx";
import { BakaDesign } from "baka-core";

import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { variantClassNames } from "../../utils";

export interface BakaAvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    BakaProps,
    BakaStates<BakaDesign["AvatarState"]> {
  variant?: BakaVariant<BakaDesign["AvatarVariant"]>;
}

export const BakaAvatar: BakaComponent<"span", BakaAvatarProps> = (props) => {
  const { as: Component = "span", variant, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-avatar", props.className, variantClassNames(variant))}
    />
  );
};
