import "./badge.scss";
import { BakaBadge, BakaBadgeProps } from "baka-ui";
import clsx from "clsx";

export type BadgeProps = BakaBadgeProps;

export const Badge = (props: BadgeProps) => {
  return <BakaBadge {...props} className={clsx("badge", props.className)} />;
};
