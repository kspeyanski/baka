import { BakaComponent, BakaIcon, BakaIconProps } from "baka-ui";
import clsx from "clsx";

export type IconProps = BakaIconProps;

export const Icon: BakaComponent<"i", IconProps> = (props: IconProps) => {
  return <BakaIcon {...props} className={clsx("icon", props.className)} />;
};
