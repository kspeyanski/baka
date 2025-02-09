import { Baka, BakaProps } from "baka-ui";

export type MenuProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "menu"
> & {};

export const Menu = <T extends React.ElementType = "div">(
  props: MenuProps<T>
) => {
  return <Baka as="div" {...props} baka="menu" />;
};

export type MenuItemProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "menu-item"
> & {};

export const MenuItem = <T extends React.ElementType = "div">(
  props: MenuItemProps<T>
) => {
  return <Baka as="div" {...props} baka="menu-item" />;
};
