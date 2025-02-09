import styles from "./layout.module.scss";
import "@fluent-ui/styles/tailwind.css";

import favicon from "./favicon.svg";

import { Text } from "@fluent-ui/components/text";
import clsx from "clsx";
import { Open_Sans } from "next/font/google";
import { Docs, allDocs } from "contentlayer/generated";
import { ColorScheme } from "../material-you/templates/color-scheme/color-scheme.client";

const openSans = Open_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-family--sans",
});

export default function FluentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const docs = allDocs;
  const groups = docs
    .sort(
      (a: Partial<Docs>, b: Partial<Docs>) =>
        (a.position ?? 0) - (b.position ?? 0)
    )
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
      <body
        id="fluent-ui"
        suppressHydrationWarning={true}
        className={clsx(openSans.variable, styles["fluent-ui"])}
      >
        <ColorScheme>
          <main className="flex flex-col">
            {/* <TopBar> */}
            <div className="flex justify-between">
              <Text>Fluent 2</Text>
              <Text>Go to fluent!</Text>
            </div>
            {/* </TopBar> */}
            <div className="flex flex-row">
              <div className="flex static w-[320px]">Sidenav</div>
              {children}
            </div>
          </main>
        </ColorScheme>
      </body>
    </html>
  );
}
