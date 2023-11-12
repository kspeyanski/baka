import "./layout.scss";
import type { Metadata } from "next";

import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Material You | Baka UI",
  description: "A React Implementation of the Material You Design System",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-family-sans",
});

export default function MaterialYouLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        ></link>
      </head>
      <body className={roboto.variable}>{children}</body>
    </html>
  );
}
