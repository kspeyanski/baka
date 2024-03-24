import { BakaMenu, BakaMenuProps, BakaComponent } from "baka-ui";
import clsx from "clsx";

export type MenuProps = BakaMenuProps;

export const Menu: BakaComponent<"div", MenuProps> = (props: MenuProps) => {
  return <BakaMenu {...props} className={clsx("menu", props.className)} />;
};
