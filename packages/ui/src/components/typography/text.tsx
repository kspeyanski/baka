import clsx from "clsx";

import { BakaComponent, BakaProps, BakaVariant } from "../../../src/models";
import { BakaDesign } from "baka-core";
import { variantClassNames } from "../../utils";

export interface BakaTextProps extends React.HTMLAttributes<HTMLSpanElement>, BakaProps {
  variant?: BakaVariant<BakaDesign["TextVariant"]>;
}

export const BakaText: BakaComponent<"span", BakaTextProps> = (props) => {
  const { as: Component = "span", variant, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-text", props.className, variantClassNames(variant))}
    />
  );
};
