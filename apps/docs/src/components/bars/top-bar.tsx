import { BakaBar, BakaBarProps } from "baka-ui";
import clsx from "clsx";

export type TopBarProps = BakaBarProps;

export const TopBar: BakaBar = (props) => {
  return <BakaBar {...props} className={clsx("top-bar", props.className)} variant={"top"} />;
};
