import clsx from "clsx";

import { BakaComponent, BakaProps, BakaVariant } from "../../../src/models";
import { BakaTextVariant } from "baka--core";
import { variantClassNames } from "../../utils";

export interface BakaTextProps extends React.HTMLAttributes<HTMLSpanElement>, BakaProps {
  variant?: BakaVariant<BakaTextVariant>;
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
