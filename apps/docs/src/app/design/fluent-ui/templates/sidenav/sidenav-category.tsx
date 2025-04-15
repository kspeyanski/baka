import Link from "next/link";
import type { Docs } from "contentlayer/generated";
import { Button, Icon, Tab, TabList, Text } from "@fluent-ui/components";
import { AppsRegular, GridDotsRegular } from "@fluentui/react-icons";

import { SidenavCategoryItemClient } from "@shared/sidenav/sidenav-category-item.client";
// @ts-expect-error
import Logo from "@icons/maskot-fluent-ui.inline-svg";
import { SidenavButton } from "./sidenav-button";

const iconsMap = {
  overview: GridDotsRegular,
  components: AppsRegular,
  default: null,
} as const;

export type SidenavCategoryProps = {
  data: Array<{
    title: string;
    icon?: keyof typeof iconsMap;
    docs: Pick<Docs, "url" | "title">[];
  }>;
};

export const SidenavCategory = (props: SidenavCategoryProps) => {
  return (
    <div className="flex items-center flex-col flex-1 justify-between pt-3 border-r border-neutral-stroke-1">
      <TabList
        variant={"vertical"}
        className="flex items-center flex-col overflow-auto gap-2"
      >
        <SidenavButton className="xxl:hidden" />
        <Tab state={{ rest: true }} readOnly>
          <Button
            variant={["icon", "extra-large", "subtle"]}
            as={Link}
            href="/"
            title="Home"
          >
            <Icon style={{ width: 32, height: 32 }}>
              <Logo
                width={32}
                height={32}
                alt="Baka Material You Logo"
                viewBox={"0 0 56 40"}
              />
            </Icon>
          </Button>
        </Tab>

        {props.data.map((group) => (
          <SidenavCategoryItemClient
            key={group.title}
            match={group.docs?.map((doc) => doc.url)}
            title={group.title}
            readOnly={false}
            url={group.docs?.[0].url}
          >
            <Tab key={group.title} variant={"subtle"}>
              <div className="flex flex-col items-center gap-2">
                <Icon
                  as={iconsMap[group.icon ?? "default"] ?? GridDotsRegular}
                />
                <Text variant="caption-2">{group.title}</Text>
              </div>
            </Tab>
          </SidenavCategoryItemClient>
        ))}
      </TabList>
    </div>
  );
};
