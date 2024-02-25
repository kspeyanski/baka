import { type Docs } from "contentlayer/generated";
import Image from "next/image";
import Logo from "@/icons/maskot-material-you.svg";
import { NavigationRail, NavigationRailProps } from "@/components/navigation/navigation-rail";
import { SidenavCategoryItem } from "./sidenav-category-item.server";
import clsx from "clsx";
import { SidenavCategoryClient, ToggleButton } from "./sidenav-category.client";
import { Icon } from "@/components/misc/icon";
import { NavigationRailItem } from "@/components/navigation/navigation-rail-item";
import Link from "next/link";
import { Label } from "@/components/typography";
import { Button } from "@/components/buttons/button";
import { ThemeToggle } from "../theme-toggle/theme-toggle.server";

export type SidenavCategoryProp = {
  data: Array<{
    title: string;
    icon?: string;
    docs: Pick<Docs, "url" | "title">[];
  }>;
} & NavigationRailProps;

export const SidenavCategory = (props: SidenavCategoryProp) => {
  const { data, ...other } = props;

  return (
    <SidenavCategoryClient>
      <NavigationRail
        className={clsx(other.className, "bg-surface-container z-20 hidden sm:flex")}
        {...other}
      >
        <div className="flex items-center flex-col flex-1 justify-between">
          <div className="flex items-center flex-col">
            <ToggleButton className="xl:hidden">
              <Icon />
            </ToggleButton>
            <NavigationRailItem as={Link} href="/" title="Home">
              <Icon>
                <Image src={Logo.src} width={33} height={32} alt="Baka Material You Logo" />
              </Icon>
              <Label>Home</Label>
            </NavigationRailItem>
            {data.map((group) => (
              <SidenavCategoryItem
                key={group.title}
                icon={<>{group.icon}</>}
                match={group.docs?.map((doc) => doc.url)}
                title={group.title}
                url={group.docs?.[0].url}
              />
            ))}
          </div>
          <ThemeToggle />
        </div>
      </NavigationRail>
    </SidenavCategoryClient>
  );
};
