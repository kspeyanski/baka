import clsx from "clsx";
import classNames from "./button.module.scss";
import { BakaProps, Baka, modulesClassNames } from "baka-ui";

export type ButtonProps<T extends React.ElementType = "button"> = BakaProps<
  T,
  "button"
> & {};

export const Button = <T extends React.ElementType = "button">(
  props: ButtonProps<T>
) => {
  return (
    <Baka
      as="button"
      {...props}
      baka="button"
      className={clsx(props.className, modulesClassNames("button", classNames, props))}
    />
  );
};
