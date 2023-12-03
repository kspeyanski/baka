/* eslint-disable @next/next/google-font-display, @next/next/no-page-custom-font  */

import "./global.css";
import "./layout.scss";

import type { Metadata } from "next";
import favicon from "./favicon.svg";

export const metadata: Metadata = {
  title: "Material You Demos | Baka UI",
  description: "A React Implementation of the Material You Design System",
};

export default function MaterialYouLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        ></link>
      </head>
      <body>
        <div className="root">{children}</div>
      </body>
    </html>
  );
}
