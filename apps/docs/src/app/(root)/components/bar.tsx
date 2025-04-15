import classNames from "./bar.module.scss";

import clsx from "clsx";
import { BakaProps, Baka, modulesClassNames } from "baka-ui";

export type BarProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "bar"
> & {};

export const Bar = <T extends React.ElementType = "div">(
  props: BarProps<T>
) => {
  return (
    <Baka
      as="div"
      {...props}
      baka="bar"
      className={clsx(props.className, modulesClassNames("bar", classNames, props))}
    />
  );
};
