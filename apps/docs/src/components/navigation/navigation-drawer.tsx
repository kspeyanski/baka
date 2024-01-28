import { BakaComponent, BakaSideNavigation, BakaSideNavigationProps } from "baka-ui";
import clsx from "clsx";

export type NavigationDrawerProps = BakaSideNavigationProps;

export const NavigationDrawer: BakaComponent<"div", NavigationDrawerProps> = (
  props: NavigationDrawerProps
) => {
  const { children, className, ...rest } = props;

  return (
    <BakaSideNavigation className={clsx("navigation-drawer", className)} {...rest}>
      {children}
    </BakaSideNavigation>
  );
};
