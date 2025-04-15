import clsx from "clsx";
import classNames from "./badge.module.scss";
import { BakaProps, Baka, modulesClassNames } from "baka-ui";

export type BadgeProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "badge"
> & {};

export const Badge = <T extends React.ElementType = "div">(
  props: BadgeProps<T>
) => {
  return (
    <Baka
      as="div"
      {...props}
      baka="badge"
      className={clsx(props.className, modulesClassNames("badge", classNames, props))}
    />
  );
};
