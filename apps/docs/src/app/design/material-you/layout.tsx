import styles from "@design/material-you/styles.module.scss";
import "@design/material-you/global.css";
import "./layout.scss";

import type { Metadata } from "next";
import favicon from "./favicon.svg";

import { Roboto, Roboto_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Material You | Baka UI",
  description: "A React Implementation of the Material You Design System",
};

import Logo from "@/icons/logo-material-you.svg";
// @ts-expect-error
import GitHub from "@/icons/github-mark.inline-svg";
import NPM from "@/icons/npm-logo.svg";
import { Container } from "@/components/layout/container";
import { Row } from "@/components/layout/row";
import { Column } from "@/components/layout/column";
import clsx from "clsx";
import { Sidenav } from "@material-you/templates/sidenav/sidenav.server";
import { SidenavState } from "@material-you/templates/sidenav/sidenav.state";
import { TopBar } from "@/components/bars/top-bar";
import { Icon } from "@/components/misc/icon";
import { ToggleButton } from "@material-you/templates/sidenav/sidenav-category.client";
import { Docs, allDocs } from "contentlayer/generated";
import Image from "next/image";
import { Search } from "@material-you/templates/search/search.client";
import { Button } from "@/components/buttons/button";
import Link from "next/link";
import { ColorScheme } from "@material-you/templates/color-scheme/color-scheme.client";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-family--sans",
});

const robotoMono = Roboto_Mono({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-family--mono",
});

export default function MaterialYouLayout({ children }: { children: React.ReactNode }) {
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
    <ColorScheme>
      <html lang="en" className={clsx(styles["material-you"])}>
        <head>
          <link rel="icon" href={favicon.src} />
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font  */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          ></link>
        </head>
        <body className={clsx(roboto.variable, robotoMono.variable)} id="material-you">
          <main className="min-h-[calc(100vh-60px)] flex flex-row">
            <SidenavState data={groups}>
              <Sidenav data={groups} />
              <Container>
                <Row as={TopBar} className={"sticky top-0 z-30 min-h-[72px] "}>
                  <Column
                    count={[4, 6, 10, 8, 8]}
                    className="items-center gap-3 md:gap-0 justify-between relative"
                  >
                    <div className="flex items-center gap-3 ">
                      <ToggleButton className="sm:hidden">
                        <Icon />
                      </ToggleButton>
                      <Image
                        src={Logo}
                        alt="Baka UI"
                        className="h-[30px] w-auto sm:hidden"
                        width={400}
                        height={33}
                      />
                    </div>
                    <Search />
                  </Column>
                  <Column count={[null, 2, 2, 4, 4]} className="gap-2 hidden sm:flex">
                    <Button
                      variant={"icon"}
                      as={Link}
                      href={"https://github.com/kspeyanski/baka"}
                      target={"_blank"}
                    >
                      <Icon>
                        <GitHub height={32} width={32} />
                        {/* <Image src={GitHub} alt="GitHub" width={32} height={32} /> */}
                      </Icon>
                    </Button>
                    <Button
                      variant={"icon"}
                      as={Link}
                      href="https://www.npmjs.com/package/baka-ui"
                      target={"_blank"}
                    >
                      <Icon>
                        <Image src={NPM} alt="NPM" width={32} height={32} />
                      </Icon>
                    </Button>
                  </Column>
                </Row>
                <Row className="relative">{children}</Row>
              </Container>
            </SidenavState>
          </main>
        </body>
      </html>
    </ColorScheme>
  );
}
