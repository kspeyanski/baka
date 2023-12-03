import clsx from "clsx";

import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { BakaDesign } from "baka-core";
import { variantClassNames } from "../../utils";

export interface BakaParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    BakaProps,
    BakaStates<BakaDesign["ParagraphState"]> {
  variant?: BakaVariant<BakaDesign["ParagraphVariant"]>;
}

export const BakaParagraph: BakaComponent<"p", BakaParagraphProps> = (props) => {
  const { as: Component = "p", variant, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-paragraph", props.className, variantClassNames(variant))}
    />
  );
};
