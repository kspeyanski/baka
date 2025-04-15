import styles from "./sidenav.module.scss";
import { SidenavClient } from "@shared/sidenav/sidenav.client";
import clsx from "clsx";
import { type Docs } from "contentlayer/generated";

import { SidenavCategory } from "./sidenav-category";
import { SidenavSubcategory } from "./sidenav-subcategory";

export type SidenavProps = {
  data: Array<{
    title: string;
    icon?: any;
    docs: Pick<Docs, "url" | "title">[];
  }>;
};

export const Sidenav = (props: SidenavProps) => {
  return (
    <SidenavClient>
      <div
        className={clsx(
          "fixed sm:sticky top-0 h-[100vh] z-40 xxl:z-0 md:flex w-[72px] xxl:w-min bg-neutral-background-2 color-neutral-foreground-3",
          styles.sidenav
        )}
      >
        <SidenavCategory data={props.data} />
        <SidenavSubcategory />
      </div>
    </SidenavClient>
  );
};
