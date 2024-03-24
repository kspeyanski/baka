import clsx from "clsx";
import type { BakaDesign } from "baka-core";

import { BakaVariant, PolymorphicComponent } from "../../../src/models";
import { variantClassNames } from "../../utils";

export type BakaContainerProps = BakaVariant<BakaDesign["ContainerVariant"]> & {};

export type BakaContainer = PolymorphicComponent<"div", BakaContainerProps>;
export const BakaContainer: BakaContainer = (props) => {
  const { as: Component = "div", variant, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-container", props.className, variantClassNames(variant))}
    />
  );
};
