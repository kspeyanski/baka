import { Icon } from "@/components/misc/icon";
import {
  NavigationRailItem,
  NavigationRailItemProps,
} from "@/components/navigation/navigation-rail-item";
import { Label } from "@/components/typography";
import { SidenavCategoryItemClient } from "./sidenav-category-item.client";

export type SidenavCategoryItemProps = NavigationRailItemProps & {
  url: string;
  icon: JSX.Element;
  title: string;
  match?: string[];
  readOnly?: boolean;
};

export const SidenavCategoryItem = (props: SidenavCategoryItemProps) => {
  const { url, icon, title, readOnly, match, ...other } = props;

  return (
    <SidenavCategoryItemClient url={url} title={title} match={match} readOnly={readOnly}>
      <NavigationRailItem>
        <Icon>{icon}</Icon>
        <Label>{title}</Label>
      </NavigationRailItem>
    </SidenavCategoryItemClient>
  );
};
