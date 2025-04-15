"use client";
import clsx from "clsx";
import Link from "next/link";
import type { Docs } from "contentlayer/generated";

import {
  Text,
  Navigation,
  NavigationProps,
  NavigationItem,
} from "@material-you/components";

import { stateClassNames } from "baka-ui";
import { useSidenav } from "@shared/sidenav/sidenav-state.client";
import { SidenavSubcategoryClient } from "@shared/sidenav/sidenav-subcategory.client";

export type SidenavSubcategoryProps = {
  data: Array<{
    title: string;
    icon?: string;
    docs: Pick<Docs, "url" | "title">[];
  }>;
} & NavigationProps;

export const SidenavSubcategory = () => {
  const [{ group, selected }] = useSidenav();
  const items = group?.docs;

  return (
    <SidenavSubcategoryClient>
      <Navigation
        variant={"side"}
        className={clsx(
          'sidenav-subcategory',
          "overflow-auto rounded-l-none w-full border-l-0 rounded-tl-0 rounded-bl-0 border-outline-variant border-solid shadow-2 z-10 xl:block min-w-[255px] xl:visible xl:opacity-100 opacity-0"
        )}
      >
        {items?.map((doc) => (
          <NavigationItem
            key={doc.url}
            as={Link}
            href={doc.url}
            className={clsx(
              stateClassNames({ selected: doc.url === selected })
            )}
          >
            <Text>{doc.title}</Text>
          </NavigationItem>
        ))}
      </Navigation>
    </SidenavSubcategoryClient>
  );
};
