import clsx from "clsx";

import { BakaComponent, BakaProps, BakaVariant } from "../../../src/models";
import { BakaHeadingVariant } from "baka-core";
import { variantClassNames } from "../../utils";

export interface BakaHeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, BakaProps {
  variant?: BakaVariant<BakaHeadingVariant>;
}

export const BakaHeading: BakaComponent<"h1", BakaHeadingProps> = (props) => {
  const { as: Component = "h1", variant, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-heading", props.className, variantClassNames(variant))}
    />
  );
};
