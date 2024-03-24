import "./design-system-card.scss";

import clsx from "clsx";
import { Badge } from "@/components/badges/badge";
import { stateClassNames } from "baka-ui";
import { Card, CardProps } from "@/components/cards/card";
import Link from "next/link";

export type DesignSystemCardProps = CardProps & {
  children: React.ReactNode;
  className?: string;
  href?: string | never;
} & ({ released: true; href: string } | { released?: false; href?: never });

export const DesignSystemCard = (props: DesignSystemCardProps) => {
  const { released, href, ...other } = props;

  return (
    <Card
      {...other}
      {...(released ? { as: Link, href } : {})}
      className={clsx(
        other.className,
        "design-system-card",
        stateClassNames({
          disabled: !released,
        })
      )}
    >
      {props.children}
      {!props.released ? <Badge>coming soon</Badge> : null}
    </Card>
  );
};
