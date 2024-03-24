import { BakaNavigation, BakaNavigationProps } from "baka-ui";
import clsx from "clsx";

export type NavigationProps = BakaNavigationProps & {
  className?: string;
  children?: React.ReactNode;
};

export const Navigation: BakaNavigation = (props: NavigationProps) => {
  const { className, ...rest } = props;

  return <BakaNavigation className={clsx("navigation", className)} {...rest} />;
};
