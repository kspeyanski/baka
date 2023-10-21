import clsx from "clsx";

import { BakaComponent, BakaProps, BakaVariant } from "../../../src/models";
import { BakaLabelVariant } from "baka-core";
import { variantClassNames } from "../../utils";

export interface BakaLabelProps extends React.HTMLAttributes<HTMLLabelElement>, BakaProps {
  variant?: BakaVariant<BakaLabelVariant>;
}

export const BakaLabel: BakaComponent<"label", BakaLabelProps> = (props) => {
  const { as: Component = "label", variant, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-label", props.className, variantClassNames(variant))}
    />
  );
};
