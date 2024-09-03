import React from "react";

import clsx from "clsx";
import { variantClassNames } from "./variant-class-names";
import { stateClassNames } from "./state-attributes";

export type BakaProps<T extends React.ElementType> = {
  as?: T | React.ElementType;
} & React.ComponentPropsWithoutRef<T>;

export const BakaComponent = <T extends React.ElementType = "span">(
  props: BakaProps<T> & {
    baka: string;
  }
) => {
  const { as: Component = "span", variant, baka, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx(`baka-${baka}`, props.className, variantClassNames(variant), stateClassNames(props))}
    />
  );
};
