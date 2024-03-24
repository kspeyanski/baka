import { Icon } from "@/components/misc/icon";
import { NavigationItem, NavigationItemProps } from "@/components/navigation/navigation-item";
import { Text } from "@/components/text";
import { SidenavCategoryItemClient } from "./sidenav-category-item.client";

export type SidenavCategoryItemProps = NavigationItemProps & {
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
      <NavigationItem>
        <Icon>{icon}</Icon>
        <Text>{title}</Text>
      </NavigationItem>
    </SidenavCategoryItemClient>
  );
};
