import { Bar } from "@katana/components/bar";
import { Divider, Icon } from "baka-material-you";

import Logo from "@icons/logo-dark.svg";
import Image from "next/image";
import { Container, Row, Column } from "@katana/components/layout";

export type HeaderProps = {
  Logo?: React.ReactElement;
};

export const Header = (props: HeaderProps) => {
  const HeaderLogo = props.Logo || (
    <Image src={Logo.src} width={128} height={22} alt="Baka UI Logo" />
  );

  return (
    <div className="sticky flex center top-0 flex-col z-50">
      <Bar as="header" variant="top">
        <Container>
          <Row>
            <Column columns={12}>
              <Icon>{HeaderLogo}</Icon>
              <ul className="ml-xl flex gap-sm">
                <li>
                  {/* <Button variant={"link"} as={Link} href="/">
                    Documentation
                  </Button> */}
                </li>
                <li>
                  {/* <Button variant={"link"} as={Link} href="/">
                    Design Systems
                  </Button> */}
                </li>
              </ul>
            </Column>
          </Row>
        </Container>
      </Bar>
      <Divider />
    </div>
  );
};
