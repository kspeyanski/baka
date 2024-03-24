import styles from "./page.module.scss";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Row } from "@/components/layout/row";
import { Column } from "@/components/layout/column";
import { Text } from "@/components/text";
import { Button } from "@/components/buttons/button";
import Link from "next/link";

import MaterialYou from "@/images/google-material-you.png";
import Fluent2 from "@/images/microsoft-fluent-2.jpeg";
import Geist from "@/images/vercel-geist.jpeg";
import { DesignSystemCard } from "./templates/design-system-card";

export default function Home() {
  return (
    <div className="pb-[100px]">
      <Container>
        <Row>
          <Column count={4}>
            <main className={"mt-40 w-[100%] text-center"}>
              <Text variant={"hero"} as="h1">
                A <span className={styles.highlight}>Design System</span> Framework
              </Text>
              <Text variant={["sub-hero", "heading-medium"]} className="mt-10">
                Elevate Your Web Design: Build from Scratch or Build on top. BakaUI helps you build
                faster and more consistent user experiences in your web apps.
              </Text>
              <div className="mt-10 flex flex-col gap-md items-center">
                <div className="flex gap-sm justify-center">
                  <Button
                    variant="cta"
                    as={Link}
                    target="_blank"
                    href="https://github.com/kspeyanski/baka"
                  >
                    Explore
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
            <Column count={2}>
              <DesignSystemCard released={true} href={"/design/material-you"}>
                <Image src={MaterialYou} alt="Google Material You" />
              </DesignSystemCard>
            </Column>
            <Column count={2}>
              <DesignSystemCard>
                <Image src={Fluent2} alt="Microsoft Fluent 2" />
              </DesignSystemCard>
            </Column>
            <Column count={2}>
              <DesignSystemCard>
                <Image src={Geist} alt="Vercel Geist" />
              </DesignSystemCard>
            </Column>
            <Column count={2}></Column>
          </Row>
        </Container>
      </div>
      <div>
        {/* Own the rendering: Engineered to be the beginning, not the end of your design system development */}
      </div>
    </div>
  );
}
