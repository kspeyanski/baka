import styles from "./layout.module.scss";
import "@fluent-ui/styles/tailwind.css";

import favicon from "./favicon.svg";

import { Container, Row, Column, Field, Input } from "@fluent-ui/components";
import { Sidenav } from "@fluent-ui/templates/sidenav/sidenav";
import clsx from "clsx";
import { Open_Sans } from "next/font/google";
import { Docs, allDocs } from "contentlayer/generated";
import { ColorScheme } from "../material-you/templates/color-scheme/color-scheme.client";
import { SidenavState } from "@shared/sidenav/sidenav-state.client";

const openSans = Open_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-family--sans",
});

export default function FluentLayout({ children }: { children: React.ReactNode }) {
  const docs = allDocs;
  const groups = docs
    .sort((a: Partial<Docs>, b: Partial<Docs>) => (a.position ?? 0) - (b.position ?? 0))
    .filter((doc) => doc._raw.flattenedPath.startsWith("design/fluent-ui"))
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
      </head>
      <body id="fluent-ui" suppressHydrationWarning={true} className={clsx(openSans.variable, styles["fluent-ui"])}>
        <ColorScheme>
          <main className="flex flex-col">
            {/* <TopBar> */}
            <SidenavState data={structuredClone(groups)}>
              <div className="flex flex-row">
                <Sidenav data={structuredClone(groups)} />
                <Container className="shadow-md z-30">
                  <div className="sticky z-30 top-0 bg-neutral-background-1 border-b border-neutral-stroke-1">
                    <Row className={"min-h-[72px] items-center"}>
                      <Column columns={[12, null, null, null, 9]}>
                        <Field variant={["filled-darker"]} className="w-full">
                          <Input placeholder="Search" />
                        </Field>
                      </Column>
                      <Column columns={[null, null, null, null, 3]} className="gap-2 hidden xl:flex">
                        brand
                      </Column>
                    </Row>
                  </div>
                  <Row className="relative h-[calc(100%-88px)]">{children}</Row>
                </Container>
              </div>
            </SidenavState>
          </main>
        </ColorScheme>
      </body>
    </html>
  );
}
