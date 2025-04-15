import "./layout.scss";
import "@material-you/styles/tailwind.css";

import type { Metadata } from "next";
import favicon from "./favicon.svg";

import { Roboto, Roboto_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Material You | Baka UI",
  description: "A React Implementation of the Material You Design System",
};
import { Docs, allDocs } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";
import { Container, Row, Column, Bar, Button, Icon } from "@material-you/components";
// @ts-expect-error
import Logo from "@icons/logo-material-you.inline-svg";
// @ts-expect-error
import GitHub from "@icons/github-mark.inline-svg";
import NPM from "@icons/npm-logo.svg";

import { SidenavState } from "@shared/sidenav/sidenav-state.client";
import { SidenavButton } from "@material-you/templates/sidenav/sidenav-button";
import { Search } from "@material-you/templates/search/search.client";
import { ColorScheme } from "@material-you/templates/color-scheme/color-scheme.client";
import { Sidenav } from "@material-you/templates/sidenav/sidenav";

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
    .filter((doc) => doc._raw.flattenedPath.startsWith("design/material-you"))
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
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font  */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        ></link>
      </head>
      <body className={clsx(roboto.variable, robotoMono.variable)} suppressHydrationWarning={true} id="material-you">
        <ColorScheme>
          <main className="flex flex-row">
            <SidenavState data={structuredClone(groups)}>
              <Sidenav data={structuredClone(groups)} />
              <Container>
                <Bar variant={"top"} className={"z-30 sticky top-0"}>
                  <div className="flex flex-col grow">
                    <Row className={"min-h-[72px] items-center"}>
                      <Column
                        columns={[4, 8, 8, 8, 8]}
                        className="items-center gap-3 sm:gap-0 justify-between relative"
                      >
                        <div className="flex items-center gap-3 ">
                          <SidenavButton className="sm:hidden" />
                          <Logo className="h-[30px] w-auto sm:hidden" height={33} />
                        </div>
                        <Search />
                      </Column>
                      <Column columns={[null, null, 2, 2, 4]} className="gap-2 hidden md:flex">
                        <Button
                          variant={"icon"}
                          as={Link}
                          href={"https://github.com/kspeyanski/baka"}
                          target={"_blank"}
                        >
                          <Icon>
                            <GitHub height={32} width={32} />
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
                  </div>
                </Bar>
                <Row className="relative h-[calc(100%-88px)]">{children}</Row>
              </Container>
            </SidenavState>
          </main>
        </ColorScheme>
      </body>
    </html>
  );
}
