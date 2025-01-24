import {
  Menu as BakaMenu,
  MenuProps as BakaMenuProps,
} from "baka-material-you";
import clsx from "clsx";

export type MenuProps = BakaMenuProps;

export const Menu: typeof BakaMenu = (props: MenuProps) => {
  return <BakaMenu {...props} className={clsx("menu", props.className)} />;
};
