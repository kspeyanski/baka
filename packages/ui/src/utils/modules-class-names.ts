import clsx from "clsx";
import { variantClassNames } from "./variant-class-names";
import { stateClassNames } from "./state-attributes";

export const modulesClassNames = (
  baka: string,
  classNames?: { [key: string]: string },
  {
    variant,
    state,
  }: {
    variant?: string | string[];
    state?: object;
  } = {}
): string =>
  clsx(
    classNames?.[baka],
    variantClassNames(variant, classNames),
    stateClassNames(state, classNames)
  );
