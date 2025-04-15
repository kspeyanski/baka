import classNames from "./design-system-card.module.scss";

import clsx from "clsx";
import Link from "next/link";

import { Badge } from "@katana/components/badge";
import { Card } from "@katana/components/card";
import { modulesClassNames } from "baka-ui";

export type DesignSystemCardProps = {
  children: React.ReactNode;
  className?: string;
} & ({ released: true; href: string } | { released?: false; href?: never });

export const DesignSystemCard = (props: DesignSystemCardProps) => {
  const { released, href, ...other } = props;

  const state = {
    disabled: !released,
  };

  return (
    <Card
      {...other}
      {...(released
        ? { as: Link, href: href as string }
        : { as: Card, href: undefined as never })}
      state={state}
      className={clsx(
        props.className,
        modulesClassNames("design-system-card", classNames, { state }),
        {
          [classNames["state--disabled"]]: !released,
        }
      )}
    >
      {props.children}
      {!props.released ? (
        <Badge className={classNames["badge"]}>coming soon</Badge>
      ) : null}
    </Card>
  );
};
