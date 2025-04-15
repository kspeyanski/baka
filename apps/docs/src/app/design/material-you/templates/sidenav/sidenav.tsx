import { type Docs } from "contentlayer/generated";
import { SidenavSubcategory } from "./sidenav-subcategory";
import { SidenavCategory } from "./sidenav-category";
import { Column } from "@material-you/components";
import { SidenavClient } from "@shared/sidenav/sidenav.client";

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
      <Column
        variant={"region-left"}
        className="fixed sm:sticky top-0 h-[100vh] z-40 md:flex"
      >
        <SidenavCategory data={props.data} />
        <SidenavSubcategory />
      </Column>
    </SidenavClient>
  );
};
