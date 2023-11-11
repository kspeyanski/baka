import { BakaComponent, BakaTopBar, BakaTopBarProps } from "baka-ui";
import clsx from "clsx";

export type TopBarProps = BakaTopBarProps;

export const TopBar: BakaComponent<"div", TopBarProps> = (props: TopBarProps) => {
  return <BakaTopBar {...props} className={clsx("katana-top-bar", props.className)} />;
};
