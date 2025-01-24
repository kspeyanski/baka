import { Icon as BakaIcon, IconProps as BakaIconProps } from "baka-material-you";
import clsx from "clsx";

export type IconProps = BakaIconProps;

export const Icon: typeof BakaIcon = (props: IconProps) => {
  return <BakaIcon {...props} as="i" className={clsx("icon", props.className)} />;
};
