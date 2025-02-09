import {
  NavigationItem as BakaNavigationItem,
  NavigationItemProps as BakaNavigationItemProps,
} from "baka-material-you";
import clsx from "clsx";

export type NavigationItemProps = BakaNavigationItemProps & {
  className?: string;
};

export const NavigationItem: typeof BakaNavigationItem = (
  props: NavigationItemProps
) => {
  return (
    <BakaNavigationItem
      {...props}
      className={clsx("navigation-item", props.className)}
    />
  );
};
