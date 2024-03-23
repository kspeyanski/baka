import clsx from "clsx";
import { PolymorphicComponent } from "../../models/component";
import { BakaVariant } from "../../models/variant";
import { BakaDesign } from "baka-core";
import { BakaStates } from "../../models/states";
import { stateClassNames } from "../../utils";

export type BakaNavigationItemProps = BakaStates<BakaDesign["NavigationItemState"]> & {
  variant?: BakaVariant<BakaDesign["NavigationItemVariant"]>;
};

export type BakaNavigationItem = PolymorphicComponent<"div", BakaNavigationItemProps>;
export const BakaNavigationItem: BakaNavigationItem = (props) => {
  const { as: Component = "div", ...other } = props;

  return (
    <Component
      {...other}
      className={clsx("baka-navigation-item", props.className, stateClassNames(other))}
    />
  );
};
