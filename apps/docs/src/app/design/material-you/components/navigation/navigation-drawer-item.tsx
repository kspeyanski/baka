import {
  NavigationItem as BakaNavigationItem,
  NavigationItemProps as BakaNavigationItemProps,
} from "baka-material-you";
import clsx from "clsx";

export type NavigationDrawerItemProps = BakaNavigationItemProps & {
  className?: string;
};

export const NavigationDrawerItem: typeof BakaNavigationItem = (
  props: NavigationDrawerItemProps
) => {
  return (
    <BakaNavigationItem
      {...props}
      className={clsx("navigation-drawer-item", props.className)}
    />
  );
};
