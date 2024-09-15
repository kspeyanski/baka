import { BakaComponent, BakaProps } from "baka-ui";

export type DividerProps<T extends React.ElementType = "span"> = BakaProps<
  T,
  "divider"
> & {};

export const Divider = <T extends React.ElementType = "span">(
  props: DividerProps<T>
) => {
  return <BakaComponent as="span" {...props} baka="divider" />;
};
