import { Docs } from "contentlayer/generated";
import { SidenavClient } from "./sidenav.client";
import { SidenavSubcategory } from "./sidenav-subcategory.server";
import { SidenavCategory } from "./sidenav-category.server";
import { Column } from "@/components/layout/column";

export type SidenavProps = {
  data: Array<{
    title: string;
    icon?: string;
    docs: Pick<Docs, "url" | "title">[];
  }>;
};

export const Sidenav = (props: SidenavProps) => {
  return (
    <SidenavClient>
      <Column variant={"region-left"} className="sticky top-0 h-[100vh] z-40 md:flex">
        <SidenavCategory data={props.data} />
        <SidenavSubcategory data={props.data} />
      </Column>
    </SidenavClient>
  );
};
