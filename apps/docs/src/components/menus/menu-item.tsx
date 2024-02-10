import { BakaMenuItem, BakaMenuItemProps, BakaComponent } from "baka-ui";
import clsx from "clsx";

export type MenuItemProps = BakaMenuItemProps;

export const MenuItem: BakaComponent<"span", MenuItemProps> = (props: MenuItemProps) => {
  return <BakaMenuItem {...props} className={clsx("menu-item", props.className)} />;
};
