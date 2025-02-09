import { Baka, BakaProps } from "baka-ui";

export type DialogProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "dialog"
> & {};

export const Dialog = <T extends React.ElementType = "div">(
  props: DialogProps<T>
) => {
  return <Baka as="div" {...props} baka="dialog" />;
};
