"use client";
import clsx from "clsx";
import Link from "next/link";
import type { Docs } from "contentlayer/generated";

import { Text, Tree, TreeItem } from "@fluent-ui/components";

import { useSidenav } from "@shared/sidenav/sidenav-state.client";
import { SidenavSubcategoryClient } from "@shared/sidenav/sidenav-subcategory.client";

export type SidenavSubcategoryProps = {
  data: Array<{
    title: string;
    icon?: string;
    docs: Pick<Docs, "url" | "title">[];
  }>;
};

export const SidenavSubcategory = () => {
  const [{ group, selected }] = useSidenav();
  const items = group?.docs;

  return (
    <SidenavSubcategoryClient>
      <div
        className={clsx(
          `overflow-auto rounded-l-none w-full border-l-0 z-40 border-outline-variant border-solid xxl:block min-w-[255px] py-3 px-2 xxl:visible xxl:opacity-100 opacity-0 bg-neutral-background-2 color-neutral-foreground-3 border-r xxl:border-0  border-neutral-stroke-1`
        )}
      >
        <Tree>
          {items?.map((doc) => (
            <TreeItem key={doc.url} state={{ selected: doc.url === selected }}>
              <Link href={doc.url}>
                <Text>{doc.title}</Text>
              </Link>
            </TreeItem>
          ))}
        </Tree>
      </div>
    </SidenavSubcategoryClient>
  );
};
