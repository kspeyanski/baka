import "./layout.scss";
import styles from "@/design/katana/styles.module.scss";
import "@/design/katana/global.css";
// import "@/design/katana/styles.scss";

import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Header } from "@katana/templates/header";

import clsx from "clsx";
import favicon from "./favicon.svg";

export const metadata: Metadata = {
  title: "Baka UI",
  description: "A Design System Framework",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={styles["katana"]}>
      <head>
        <link rel="icon" href={favicon.src} />
      </head>
      <body className={clsx(GeistSans.variable, GeistMono.variable)} id="katana">
        <Header />
        {children}
      </body>
    </html>
  );
}
