import React from "react";

import type { BakaDesign } from "baka-core";
import clsx from "clsx";

import { BakaVariant, PolymorphicComponent } from "../../../src/models";
import { variantClassNames } from "../../utils";

export type BakaCardProps = {
  variant?: BakaVariant<BakaDesign["CardVariant"]>;
};

export type BakaCard = PolymorphicComponent<"div", BakaCardProps>;
export const BakaCard: BakaCard = (props) => {
  const { as: Component = "div", variant, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-card", props.className, variantClassNames(variant))}
    />
  );
};
