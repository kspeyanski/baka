import { BakaComponent, BakaProps } from "baka-ui";

export type NavigationProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "navigation"
> & {};

export const Navigation = <T extends React.ElementType = "div">(
  props: NavigationProps<T>
) => {
  return <BakaComponent as="div" {...props} baka="navigation" />;
};

export type NavigationItemProps<T extends React.ElementType = "div"> =
  BakaProps<T, "navigation-item"> & {};

export const NavigationItem = <T extends React.ElementType = "div">(
  props: NavigationItemProps<T>
) => {
  return <BakaComponent as="div" {...props} baka="navigation-item" />;
};
