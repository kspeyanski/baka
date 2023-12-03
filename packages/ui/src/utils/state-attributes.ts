import clsx from "clsx";
import { BakaStates } from "../models";

export const stateClassNames = (
  states?: BakaStates<any>
) =>
  clsx({
    [`baka-state--selected`]: states.selected,
    [`baka-state--checked`]: states.checked,
    [`baka-state--readonly`]: states.readOnly,
    [`baka-state--indeterminate`]: states.indeterminate,
    [`baka-state--hover`]: states.hovered,
    [`baka-state--focus`]: states.focused,
    [`baka-state--active`]: states.activated,
    [`baka-state--disabled`]: states.disabled,
    [`baka-state--empty`]: states.empty,
    [`baka-state--valid`]: states.valid,
    [`baka-state--invalid`]: states.invalid,
    [`baka-state--dragged`]: states.dragged,
  });
