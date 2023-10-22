import clsx from "clsx";
import { BakaListItemVariant } from "baka-core";
import { BakaComponent, BakaProps, BakaStates, BakaVariant } from "../../../src/models";
import { stateClassNames, variantClassNames } from "../../utils";

export interface BakaListItemProps
  extends React.HTMLAttributes<HTMLLIElement>,
    BakaProps,
    BakaStates {
  variant?: BakaVariant<BakaListItemVariant>;
}

export const BakaListItem: BakaComponent<"li", BakaListItemProps> = (props) => {
  const { as: Component = "li", variant, readOnly, disabled, ...other } = props;

  return (
    <Component
      {...other}
      className={clsx(
        "baka-list-item",
        props.className,
        stateClassNames(props),
        variantClassNames(variant)
      )}
    />
  );
};