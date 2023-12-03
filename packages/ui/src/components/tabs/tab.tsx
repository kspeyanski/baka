import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";
import { BakaDesign } from "baka-core";

export interface BakaTabProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BakaProps,
    BakaStates<BakaDesign["TabState"]> {
  variant?: BakaVariant<BakaDesign["TabVariant"]>;
}

export const BakaTab: BakaComponent<"div", BakaTabProps> = (props) => {
  const { as: Component = "div", variant, readOnly, disabled, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx(
        "baka-tab",
        props.className,
        stateClassNames(props),
        variantClassNames(variant)
      )}
    />
  );
};
