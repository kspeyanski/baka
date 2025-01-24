import {
  MenuItem as BakaMenuItem,
  MenuItemProps as BakaMenuItemProps,
} from "baka-material-you";
import clsx from "clsx";

export type MenuItemProps = BakaMenuItemProps;

export const MenuItem: typeof BakaMenuItem = (props: MenuItemProps) => {
  return (
    <BakaMenuItem {...props} className={clsx("menu-item", props.className)} />
  );
};
