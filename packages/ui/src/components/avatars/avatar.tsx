import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaAvatarProps = BakaStates<BakaDesign["AvatarState"]> &
  BakaVariant<BakaDesign["AvatarVariant"]> & {};

export type BakaAvatar = PolymorphicComponent<"span", BakaAvatarProps>;
export const BakaAvatar: BakaAvatar = (props) => {
  const {
    _ref,
    as: Component = "span",
    variant,
    selected,
    checked,
    readOnly,
    indeterminate,
    hovered,
    focused,
    activated,
    disabled,
    empty,
    valid,
    invalid,
    dragged,
    ...other
  } = props;

  return (
    <Component
      ref={_ref}
      {...other}
      className={clsx(
        "baka-avatar",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
