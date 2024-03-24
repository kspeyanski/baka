import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaListItemProps = BakaStates<BakaDesign["ListItemState"]> &
  BakaVariant<BakaDesign["ListItemVariant"]> & {};

export type BakaListItem = PolymorphicComponent<"li", BakaListItemProps>;
export const BakaListItem: BakaListItem = (props) => {
  const {
    as: Component = "li",
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
      {...other}
      disabled={disabled}
      className={clsx(
        "baka-list-item",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
