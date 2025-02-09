import "@katana/styles/tailwind.css";
import styles from "./layout.module.scss";

import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { Header } from "@katana/templates/header";

import clsx from "clsx";
import favicon from "./favicon.svg";
import { Button } from "./components/button";

export const metadata: Metadata = {
  title: "Baka UI",
  description: "A Design System Framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />

        <meta property="og:url" content="https://www.baka-ui.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Baka UI" />
        <meta property="og:description" content="A Design System Framework" />
        <meta property="og:image" content="https://baka-ui.com/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="baka-ui.com" />
        <meta property="twitter:url" content="https://www.baka-ui.com/" />
        <meta name="twitter:title" content="Baka UI" />
        <meta name="twitter:description" content="A Design System Framework" />
        <meta name="twitter:image" content="https://baka-ui.com/og-image.png" />
      </head>
      <body
        className={clsx(
          styles["katana"],
          GeistSans.variable,
          GeistMono.variable
        )}
        id="katana"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
