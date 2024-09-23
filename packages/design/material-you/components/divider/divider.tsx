import { BakaComponent, BakaProps } from "baka-ui";

export type DividerProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "divider"
> & {};

export const Divider = <T extends React.ElementType = "div">(
  props: DividerProps<T>
) => {
  return <BakaComponent as="div" {...props} baka="divider" />;
};
