import { Navigation as BakaNavigation, NavigationProps as BakaNavigationProps } from "baka-material-you";
import clsx from "clsx";

export type NavigationProps = BakaNavigationProps & {
  className?: string;
  children?: React.ReactNode;
};

export const Navigation: typeof BakaNavigation = (props: NavigationProps) => {
  const { className, ...rest } = props;

  return <BakaNavigation className={clsx("navigation", className)} {...rest} />;
};
