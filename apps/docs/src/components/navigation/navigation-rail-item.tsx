"use client";

import { BakaNavigationRailItem, BakaNavigationRailItemProps, BakaComponent } from "baka-ui";
import clsx from "clsx";

export type NavigationRailItemProps = BakaNavigationRailItemProps;

export const NavigationRailItem: BakaComponent<"div", NavigationRailItemProps> = (
  props: NavigationRailItemProps
) => {
  return (
    <BakaNavigationRailItem {...props} className={clsx("navigation-rail-item", props.className)} />
  );
};
