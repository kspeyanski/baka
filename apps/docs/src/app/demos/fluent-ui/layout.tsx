import "./global.css";
import "./layout.scss";

import type { Metadata } from "next";
import favicon from "./favicon.svg";

export const metadata: Metadata = {
  title: "Fluent UI Demos | Baka UI",
  description: "A React Implementation of the Fluent UI Design System",
};

export default function FluentUILayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
      </head>
      <body id="fluent-ui--demos">
        <div className="root">{children}</div>
      </body>
    </html>
  );
}
