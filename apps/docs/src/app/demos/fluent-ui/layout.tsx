/* eslint-disable @next/next/google-font-display, @next/next/no-page-custom-font  */

import "./global.css";
import "./layout.scss";

import type { Metadata } from "next";
import favicon from "./favicon.svg";

export const metadata: Metadata = {
  title: "Fluent UI Demos | Baka UI",
  description: "A React Implementation of the Fluent UI Design System",
};

export default function FluentUILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
        />
      </head>
      <body id="fluent-ui--demos">
        <div className="root">{children}</div>
      </body>
    </html>
  );
}
