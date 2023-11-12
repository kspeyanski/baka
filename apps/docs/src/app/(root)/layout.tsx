import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import clsx from "clsx";
import favicon from "./favicon.svg";

import "./layout.scss";

import "@/design/katana/global.css";
import "@/design/katana/styles.scss";

export const metadata: Metadata = {
  title: "Baka UI",
  description: "A Design System Framework",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
      </head>
      <body className={clsx(GeistSans.variable, GeistMono.variable)}>{children}</body>
    </html>
  );
}
