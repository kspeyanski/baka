import clsx from "clsx";

import { BakaComponent, BakaProps, BakaVariant } from "../../../src/models";
import { BakaParagraphVariant } from "baka--core";
import { variantClassNames } from "../../utils";

export interface BakaParagraphProps extends React.HTMLAttributes<HTMLParagraphElement>, BakaProps {
  variant?: BakaVariant<BakaParagraphVariant>;
}

export const BakaParagraph: BakaComponent<"p", BakaParagraphProps> = (props) => {
  const { as: Component = "p", variant, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx(
        "baka-paragraph",
        props.className,
        variantClassNames(variant)
      )}
    />
  );
};
