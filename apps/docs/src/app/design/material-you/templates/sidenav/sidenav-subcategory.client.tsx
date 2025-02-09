"use client";

import { Docs } from "contentlayer/generated";

import React from "react";
import { NavigationDrawer, NavigationDrawerProps } from "@material-you/components/navigation/navigation-drawer";
import { NavigationDrawerItem } from "@material-you/components/navigation/navigation-drawer-item";
import Link from "next/link";
import clsx from "clsx";
import { stateClassNames } from "baka-ui";
import { SIDENAV_ACTION, useSidenav } from "./sidenav.state";
import { Text } from "@material-you/components/text";

export type SidenavSubcategoryClientProps = {
  data: Array<{
    title: string;
    icon?: string;
    docs: Pick<Docs, "url" | "title">[];
  }>;
} & NavigationDrawerProps;

export const SidenavSubcategoryClient = (props: SidenavSubcategoryClientProps) => {
  const { data, ...other } = props;
  const [{ open, group, expanded, selected }, dispatch] = useSidenav();
  // const [group, setGroup] = React.useState(data.find((group) => group.title === expanded));
  const items = group?.docs;
  const [collection, setCollection] = React.useState<"group" | "items">("items");

  const handleGroupClick = React.useCallback(() => {
    // setCollection("group");
  }, []);

  const handleCloseClick = React.useCallback(() => {
    setCollection("items");
    dispatch({ type: SIDENAV_ACTION.CLOSE });
  }, []);

  return (
    <NavigationDrawer
      {...other}
      className={clsx(
        "overflow-auto rounded-l-none w-full border-l-0 border-outline-variant border-solid shadow-2 z-10 xl:block min-w-[255px]",
        "opacity-0",
        {
          ["invisible"]: !open,
          ["!opacity-100"]: open,
        },
        "xl:visible",
        "xl:opacity-100",
        other.className
      )}
    >
      {/* <Button variant={"icon"} onClick={handleCloseClick} className="xl:hidden">
        <Icon className={clsx("xl:hidden")}>menu_open</Icon>
      </Button> */}
      {(() => {
        switch (collection) {
          // case "group":
          //   return (
          //     <>
          //       {data.map((group) => (
          //         <NavigationDrawerItem
          //           key={group.title}
          //           onClick={() => {
          //             setItems(group.docs);
          //             setGroup(group);
          //             setCollection("items");
          //           }}
          //           className={clsx(stateClassNames({ selected: group.title === expanded }))}
          //         >
          //           <Icon className={clsx("xl:hidden")}>{group.icon}</Icon>
          //           <Label>{group.title}</Label>
          //         </NavigationDrawerItem>
          //       ))}
          //     </>
          //   );
          case "items":
            return (
              <>
                {/* <NavigationDrawerItem
                  className={clsx(
                    stateClassNames({ selected: open && !expanded }),
                    clsx("xl:hidden")
                  )}
                  onClick={handleGroupClick}
                >
                  <Icon>chevron_left</Icon>
                  <Label>{group?.title}</Label>
                </NavigationDrawerItem> */}
                {items?.map((doc) => (
                  <NavigationDrawerItem
                    key={doc.url}
                    as={Link}
                    href={doc.url}
                    className={clsx(stateClassNames({ selected: doc.url === selected }))}
                  >
                    {/* <Icon className={clsx("xl:hidden")} style={{ width: 24, height: 24 }}></Icon> */}
                    <Text>{doc.title}</Text>
                  </NavigationDrawerItem>
                ))}
              </>
            );
        }
      })()}
    </NavigationDrawer>
  );
};

// {collection === "group" ? (
//   <></>
// ) : (
//   <>
//     <NavigationDrawerItem
//       className={clsx(stateClassNames({ selected: open && !expanded }))}
//       onClick={handleGroupClick}
//     >
//       <Icon className={clsx("xl:hidden")}>chevron_left</Icon>
//       <Label>{group?.title}</Label>
//     </NavigationDrawerItem>
//     {items?.map((doc) => (
//       <NavigationDrawerItem
//         key={doc.url}
//         as={Link}
//         href={doc.url}
//         className={clsx(stateClassNames({ selected: doc.url === selected }))}
//       >
//         <Icon className={clsx("xl:hidden")} style={{ width: 24, height: 24 }}></Icon>
//         <Label>{doc.title}</Label>
//       </NavigationDrawerItem>
//     ))}
//   </>
// )}
