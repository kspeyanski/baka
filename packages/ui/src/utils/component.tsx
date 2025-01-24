import React from "react";

import clsx from "clsx";
import { variantClassNames } from "./variant-class-names";
import { stateClassNames } from "./state-attributes";
import { BakaDesign } from "../models/design";

type Baka<B extends keyof BakaDesign> = {
  baka?: B;
};

export type BakaProps<
  T extends React.ElementType,
  C = unknown,
  A = {}
> = (C extends keyof BakaDesign
  ? {
      as?: T | React.ElementType;
      variant?: BakaDesign[C]["variant"] /*  | string */;
      state?: BakaDesign[C]["state"];
      ref?: React.Ref<any>;
      _ref?: React.Ref<any>;
    }
  : A extends Baka<infer B extends keyof BakaDesign>
  ? {
      as?: T | React.ElementType;
      variant?: BakaDesign[B]["variant"] /*  | string */;
      state?: BakaDesign[B]["state"];
      ref?: React.Ref<any>;
      _ref?: React.Ref<any>;
    }
  : {}) &
  React.ComponentPropsWithoutRef<T>;

export const BakaComponent = <T extends React.ElementType = "span">(
  props: BakaProps<T> & Baka<keyof BakaDesign>
) => {
  const {
    ref,
    _ref,
    as: Component = "span",
    variant,
    state,
    baka,
    ...other
  } = props;

  return (
    <Component
      ref={ref ?? _ref}
      {...other}
      className={clsx(
        `baka-${baka}`,
        props.className,
        variantClassNames(variant),
        stateClassNames(state)
      )}
    />
  );
};
