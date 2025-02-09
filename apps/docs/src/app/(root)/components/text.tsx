import classNames from "./text.module.scss";
import { BakaProps, Baka } from "baka-ui";

export type TextProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "text"
> & {};

export const Text = <T extends React.ElementType = "div">(
  props: TextProps<T>
) => {
  return (
    <Baka as="span" {...props} baka="text" classNames={classNames} />
  );
};
