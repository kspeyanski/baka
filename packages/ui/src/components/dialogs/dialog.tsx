import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaDialogProps = BakaStates<BakaDesign["DialogState"]> &
  BakaVariant<BakaDesign["DialogVariant"]> & {};

export type BakaDialog = PolymorphicComponent<"div", BakaDialogProps>;
export const BakaDialog: BakaDialog = (props) => {
  const {
    _ref,
    as: Component = "div",
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
      disabled={disabled}
      className={clsx(
        "baka-dialog",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
