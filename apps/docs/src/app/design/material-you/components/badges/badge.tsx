import "./badge.scss";
import { Badge as BakaBadge, BadgeProps as BakaBadgeProps } from "baka-material-you";
import clsx from "clsx";

export type BadgeProps = BakaBadgeProps;

export const Badge = (props: BadgeProps) => {
  return <BakaBadge {...props} className={clsx("badge", props.className)} />;
};
