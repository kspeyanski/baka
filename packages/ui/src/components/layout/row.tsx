import clsx from "clsx";

import { BakaComponent, BakaProps, BakaVariant } from "../../../src/models";
import { variantClassNames } from "../../utils";
import { BakaDesign } from "baka-core";

export interface BakaRowProps extends React.HTMLAttributes<HTMLDivElement>, BakaProps {
  variant?: BakaVariant<BakaDesign["RowVariant"]>;
}

export const BakaRow: BakaComponent<"div", BakaRowProps> = (props) => {
  const { as: Component = "div", variant, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-row", props.className, variantClassNames(variant))}
    />
  );
};
