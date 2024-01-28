import { BakaSideNavigationItem, BakaSideNavigationItemProps, BakaComponent } from "baka-ui";
import clsx from "clsx";

export type NavigationDrawerItemProps = BakaSideNavigationItemProps;

export const NavigationDrawerItem: BakaComponent<"div", NavigationDrawerItemProps> = (
  props: NavigationDrawerItemProps
) => {
  return (
    <BakaSideNavigationItem
      {...props}
      className={clsx("navigation-drawer-item", props.className)}
    />
  );
};
