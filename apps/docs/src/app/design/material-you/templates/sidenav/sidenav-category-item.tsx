import { Icon } from "@/components/misc/icon";
import {
  NavigationItem,
  NavigationItemProps,
} from "@/components/navigation/navigation-item";
import { Text } from "@/components/text";
import { SidenavCategoryItemClient } from "./sidenav-category-item.client";
import { JSX } from "react";

export type SidenavCategoryItemProps = NavigationItemProps & {
  as?: any;
  url: string;
  icon: JSX.Element;
  title: string;
  match?: string[];
  readOnly?: boolean;
};

export const SidenavCategoryItem = (props: SidenavCategoryItemProps) => {
  const { as: Component, url, icon, title, readOnly, match, ...other } = props;

  return (
    <SidenavCategoryItemClient
      url={url}
      title={title}
      match={match}
      readOnly={readOnly}
    >
      <NavigationItem as={Component} {...other}>
        <Icon>{icon}</Icon>
        <Text variant="label-medium">{title}</Text>
      </NavigationItem>
    </SidenavCategoryItemClient>
  );
};
