import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { BakaDesign } from "baka-core";
import { variantClassNames } from "../../utils";

export interface BakaDialogProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BakaProps,
    BakaStates<BakaDesign["DialogState"]> {
  variant?: BakaVariant<BakaDesign["DialogVariant"]>;
}

export const BakaDialog: BakaComponent<"div", BakaDialogProps> = (props) => {
  const { as: Component = "div", variant, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-dialog", props.className, variantClassNames(variant))}
    />
  );
};
