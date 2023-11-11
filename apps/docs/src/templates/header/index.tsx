import { TopBar } from "@/components/bars/top-bar";
import { Button } from "@/components/buttons/button";

import Logo from "@/icons/logo-dark.svg";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="sticky flex center">
      <TopBar as="header">
        <Image src={Logo.src} width={128} height={22} alt="Baka UI Logo" />
        <ul className="ml-xl flex gap-sm">
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
        </ul>
      </TopBar>
    </div>
  );
};
