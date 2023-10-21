import clsx from "clsx";

import { BakaComponent, BakaProps, BakaVariant } from "../../../src/models";
import { BakaTopBarVariant } from "baka-core";
import { variantClassNames } from "../../utils";

export interface BakaTopBarProps extends React.HTMLAttributes<HTMLDivElement>, BakaProps {
  variant?: BakaVariant<BakaTopBarVariant>;
}

export const BakaTopBar: BakaComponent<"div", BakaTopBarProps> = (props) => {
  const { as: Component = "div", variant, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-top-bar", props.className, variantClassNames(variant))}
    />
  );
};
