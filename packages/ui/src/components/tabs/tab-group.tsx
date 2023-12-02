import clsx from "clsx";

import { BakaComponent, BakaProps, BakaVariant } from "../../../src/models";
import { variantClassNames } from "../../utils";
import { BakaDesign } from "baka-core";

export interface BakaTabGroupProps extends React.HTMLAttributes<HTMLDivElement>, BakaProps {
  variant?: BakaVariant<BakaDesign["TabGroupVariant"]>;
}

export const BakaTabGroup: BakaComponent<"div", BakaTabGroupProps> = (props) => {
  const { as: Component = "div", variant, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-tab-group", props.className, variantClassNames(variant))}
    />
  );
};
