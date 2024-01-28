import { BakaComponent, BakaNavigationRail, BakaNavigationRailProps } from "baka-ui";
import clsx from "clsx";

export type NavigationRailProps = BakaNavigationRailProps;

export const NavigationRail: BakaComponent<"div", NavigationRailProps> = (
  props: NavigationRailProps
) => {
  const { children, className, ...rest } = props;

  return (
    <BakaNavigationRail className={clsx("navigation-rail", className)} {...rest}>
      {children}
    </BakaNavigationRail>
  );
};
