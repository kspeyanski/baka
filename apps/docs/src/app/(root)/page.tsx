import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";

import { Container, Row, Column } from "@katana/components/layout";
import { Text } from "@katana/components/text";
import { Button } from "@katana/components/button";
import { DesignSystemCard } from "@katana/templates/design-system-card";

import MaterialYou from "@images/google-material-you.png";
import FluentUI from "@images/microsoft-fluent-ui.jpeg";
import Geist from "@images/vercel-geist.jpeg";

export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="pb-[100px]">
      <Container>
        <Row>
          <Column columns={4}>
            <main className={"mt-40 w-[100%] text-center"}>
              <Text variant={"hero"} as="h1">
                A <span className={styles.highlight}>Design System</span>{" "}
                Framework
              </Text>
              <Text variant={["sub-hero"]} className="mt-10">
                Elevate Your Web Design: Build on top of the Material You Design
                System. BakaUI helps you build faster and more consistent user
                experiences in your web apps.
              </Text>
              <div className="mt-10 flex flex-col gap-md items-center">
                <div className="flex gap-lg justify-center">
                  <Button
                    variant="cta"
                    as={Link}
                    className="w-[137px]"
                    href="design/material-you"
                  >
                    Explore
                  </Button>
                  <Button
                    variant="secondary"
                    as={Link}
                    target="_blank"
                    className="w-[137px]"
                    href="https://github.com/kspeyanski/baka"
                  >
                    Source Code
                  </Button>
                </div>
                <div>
                  <Text variant="code">~ npm install baka-ui</Text>
                </div>
              </div>
            </main>
          </Column>
        </Row>
      </Container>
      <div className="mt-40">
        <Container>
          <Row>
            <Column>
              <Text as="h2" variant={"h2"}>
                Showcase
              </Text>
            </Column>
          </Row>
          <Row className="mt-6">
            <Column columns={2}>
              <DesignSystemCard released={true} href={"/design/material-you"}>
                <Image src={MaterialYou} alt="Google Material You" />
              </DesignSystemCard>
            </Column>
            <Column columns={2}>
              <DesignSystemCard>
                <Image src={FluentUI} alt="Microsoft Fluent 2" />
              </DesignSystemCard>
            </Column>
            <Column columns={2}>
              <DesignSystemCard>
                <Image src={Geist} alt="Vercel Geist" />
              </DesignSystemCard>
            </Column>
            <Column columns={2}></Column>
          </Row>
        </Container>
      </div>
      <div></div>
    </div>
  );
}
