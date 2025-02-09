import { Icon } from "@/app/design/material-you/components/misc/icon";
import {
  NavigationItem,
  NavigationItemProps,
} from "@material-you/components/navigation/navigation-item";
import { Text } from "@material-you/components/text";
import { SidenavCategoryItemClient } from "./sidenav-category-item.client";
import { JSX } from "react";

export type SidenavCategoryItemProps = NavigationItemProps & {
  as?: any;
  href: string;
  icon: JSX.Element;
  title: string;
  match?: string[];
  readOnly?: boolean;
};

export const SidenavCategoryItem = (props: SidenavCategoryItemProps) => {
  const { as: Component, href, icon, title, readOnly, match, ...other } = props;

  return (
    <SidenavCategoryItemClient
      url={href}
      title={title}
      match={match}
      readOnly={readOnly}
    >
      <NavigationItem as={Component ?? 'span'} href={href} {...other}>
        <Icon>{icon}</Icon>
        <Text variant="label-medium">{title}</Text>
      </NavigationItem>
    </SidenavCategoryItemClient>
  );
};
