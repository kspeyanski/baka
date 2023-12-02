import "./layout.scss";
import "@/design/material-you/global.css";

import type { Metadata } from "next";
import Image from "next/image";
import favicon from "./favicon.svg";

import { Roboto, Roboto_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Material You | Baka UI",
  description: "A React Implementation of the Material You Design System",
};

import Logo from "@/icons/logo-material-you.svg";
import { Header } from "@/templates/header";
import { Container } from "@/components/layout/container";
import { Row } from "@/components/layout/row";
import { Column } from "@/components/layout/column";
import { Sidenav } from "@/templates/sidenav";
import clsx from "clsx";

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
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font  */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        ></link>
      </head>
      <body className={clsx(roboto.variable, robotoMono.variable)}>
        <Header
          Logo={<Image src={Logo.src} width={141} height={32} alt="Baka Material You Logo" />}
        />
        <main className="min-h-[calc(100vh-60px)]">
          <Container>
            <Row className="relative">
              <Column count={3} className="hidden md:flex sticky top-[100px] h-[calc(100%-100px)] ">
                <Sidenav />
              </Column>
              {children}
            </Row>
          </Container>
        </main>
      </body>
    </html>
  );
}
