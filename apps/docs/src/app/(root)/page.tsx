import styles from "./page.module.scss";
import { Container } from "@/components/layout/container";
import { Row } from "@/components/layout/row";
import { Column } from "@/components/layout/column";
import { Header } from "@/templates/header";
import { Heading, Paragraph, Text } from "@/components/typography";
import { Button } from "@/components/buttons/button";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Column>
            <main className={"mt-40"}>
              <Heading variant={"hero"}>
                A <span className={styles.highlight}>Design System</span> Framework
              </Heading>
              <Paragraph variant={["sub-hero"]} className="mt-10">
                Elevate Your Web Design: Build from Scratch or Build on top. BakaUI helps you build
                faster and more consistent user experiences in your web apps.
              </Paragraph>
              <div className="mt-10 flex flex-col gap-md items-center">
                <div className="flex gap-sm justify-center">
                  <Button variant="cta">Get Started</Button>
                </div>
                <div>
                  <Text variant="code">~ npm install baka-ui</Text>
                </div>
              </div>
            </main>
          </Column>
        </Row>
      </Container>
      <div>
        {/* Own the rendering: Engineered to be the beginning, not the end of your design system development */}
      </div>
    </>
  );
}
