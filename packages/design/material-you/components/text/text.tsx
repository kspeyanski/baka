import { BakaComponent, BakaProps } from "baka-ui";

export type TextProps<T extends React.ElementType = "span"> = BakaProps<
  T,
  "text"
> & {};

export const Text = <T extends React.ElementType = "span">(
  props: TextProps<T>
) => {
  return <BakaComponent as="span" type="text" {...props} baka="text" />;
};
