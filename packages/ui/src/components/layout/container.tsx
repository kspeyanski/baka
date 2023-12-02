import type { BakaDesign } from "baka-core";
import clsx from "clsx";

import { BakaComponent, BakaProps, BakaVariant } from "../../../src/models";
import { variantClassNames } from "../../utils";

export interface BakaContainerProps extends React.HTMLAttributes<HTMLDivElement>, BakaProps {
  variant?: BakaVariant<BakaDesign["ContainerVariant"]>; 
}

export const BakaContainer: BakaComponent<"div", BakaContainerProps> = (props) => {
  const { as: Component = "div", variant, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-container", props.className, variantClassNames(variant))}
    />
  );
};
