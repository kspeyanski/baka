import { BakaNavigation, BakaNavigationProps } from "baka-ui";
import clsx from "clsx";

export type NavigationDrawerProps = BakaNavigationProps & {
  className?: string;
  children?: React.ReactNode;
};

export const NavigationDrawer: BakaNavigation = (props: NavigationDrawerProps) => {
  const { children, className, ...rest } = props;

  return (
    <BakaNavigation className={clsx("navigation-drawer", className)} variant={"side"}>
      {children}
    </BakaNavigation>
  );
};
