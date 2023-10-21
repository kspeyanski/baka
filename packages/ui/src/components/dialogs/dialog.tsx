import clsx from "clsx";

import { BakaComponent, BakaProps, BakaVariant } from "../../../src/models";
import { BakaDialogVariant } from "baka--core";
import { variantClassNames } from "../../utils";

export interface BakaDialogProps extends React.HTMLAttributes<HTMLDivElement>, BakaProps {
  variant?: BakaVariant<BakaDialogVariant>;
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
