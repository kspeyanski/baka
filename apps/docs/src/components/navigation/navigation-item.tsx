"use client";

import { BakaNavigationItem, BakaNavigationItemProps } from "baka-ui";
import clsx from "clsx";

export type NavigationItemProps = BakaNavigationItemProps & {
  className?: string;
};

export const NavigationItem: BakaNavigationItem = (props: NavigationItemProps) => {
  return <BakaNavigationItem {...props} className={clsx("navigation-item", props.className)} />;
};
