import { allDocs, Docs } from "contentlayer/generated";
import { SidenavClient } from "./sidenav.client";
import { SidenavSubcategory } from "./sidenav-subcategory.server";
import { SidenavCategory } from "./sidenav-category.server";
import { Column } from "@/components/layout/column";
import { SidenavState } from "./sidenav.state";

export type SidenavProps = {};

export const Sidenav = () => {
  const docs = allDocs;

  const groups = docs
    .sort((a: Partial<Docs>, b: Partial<Docs>) => (a.position ?? 0) - (b.position ?? 0))
    .reduce((acc, doc) => {
      const g = acc.find((a) => a.title === doc?.group?.title);

      if (!g) {
        acc.push({
          ...doc.group,
          docs: [{ title: doc.title, url: doc.url }],
        });
      } else {
        g.docs.push({ title: doc.title, url: doc.url });
      }

      return acc;
    }, [] as Array<{ title: string; icon?: string; docs: Pick<Docs, "url" | "title">[] }>);

  return (
    <SidenavState data={groups}>
      <SidenavClient>
        <Column variant={"region-left"} className="sticky top-0 h-[100vh] z-30 hidden sm:flex">
          <SidenavCategory data={groups} />
          <SidenavSubcategory data={groups} />
        </Column>
      </SidenavClient>
    </SidenavState>
  );
};
