import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaStates, BakaVariant, PolymorphicComponent } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export type BakaListProps = BakaStates<BakaDesign["ListState"]> &
  BakaVariant<BakaDesign["ListVariant"]> & {};

export type BakaList = PolymorphicComponent<"ul", BakaListProps>;
export const BakaList: BakaList = (props) => {
  const {
    _ref,
    as: Component = "ul",
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
        "baka-list",
        props.className,
        variantClassNames(variant),
        stateClassNames(props)
      )}
    />
  );
};
