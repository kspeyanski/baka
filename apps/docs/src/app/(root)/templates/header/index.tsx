import { TopBar } from "@/components/bars/top-bar";
import { BakaDivider, BakaIcon } from "baka-ui";

import Logo from "@/icons/logo-dark.svg";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Row } from "@/components/layout/row";
import { Column } from "@/components/layout/column";

export type HeaderProps = {
  Logo?: React.ReactElement;
};

export const Header = (props: HeaderProps) => {
  const HeaderLogo = props.Logo || (
    <Image src={Logo.src} width={128} height={22} alt="Baka UI Logo" />
  );

  return (
    <div className="sticky flex center top-0 flex-col z-50">
      <TopBar as="header">
        <Container>
          <Row>
            <Column count={12}>
              <BakaIcon>{HeaderLogo}</BakaIcon>
              {/* <ul className="ml-xl flex gap-sm">
                <li>
                  <Button variant={"link"} as={Link} href="/">
                    Documentation
                  </Button>
                </li>
                <li>
                  <Button variant={"link"} as={Link} href="/">
                    Design Systems
                  </Button>
                </li>
              </ul> */}
            </Column>
          </Row>
        </Container>
      </TopBar>
      <BakaDivider />
    </div>
  );
};
