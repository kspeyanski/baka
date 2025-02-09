import {
  Navigation as BakaNavigation,
  NavigationProps as BakaNavigationProps,
} from "baka-material-you";
import clsx from "clsx";

export type NavigationDrawerProps = BakaNavigationProps & {
  className?: string;
  children?: React.ReactNode;
};

export const NavigationDrawer: typeof BakaNavigation = (
  props: NavigationDrawerProps
) => {
  const { children, className, ...rest } = props;

  return (
    <BakaNavigation
      className={clsx("navigation-drawer", className)}
      variant={"side"}
    >
      {children}
    </BakaNavigation>
  );
};
