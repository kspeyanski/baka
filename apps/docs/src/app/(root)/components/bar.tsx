import { BakaProps, Baka } from "baka-ui";
import classNames from "./bar.module.scss";

export type BarProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "bar"
> & {};

export const Bar = <T extends React.ElementType = "div">(
  props: BarProps<T>
) => {
  return (
    <Baka as="div" {...props} baka="bar" classNames={classNames} />
  );
};
