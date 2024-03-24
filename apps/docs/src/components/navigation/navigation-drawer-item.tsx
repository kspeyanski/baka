import { BakaNavigationItem, BakaNavigationItemProps } from "baka-ui";
import clsx from "clsx";

export type NavigationDrawerItemProps = BakaNavigationItemProps & {
  className?: string;
};

export const NavigationDrawerItem: BakaNavigationItem = (props: NavigationDrawerItemProps) => {
  return (
    <BakaNavigationItem {...props} className={clsx("navigation-drawer-item", props.className)} />
  );
};
