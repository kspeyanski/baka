import { Baka, BakaProps } from "baka-ui";

export type TextProps<T extends React.ElementType = "span"> = BakaProps<
  T,
  "text"
> & {};

export const Text = <T extends React.ElementType = "span">(
  props: TextProps<T>
) => {
  return <Baka as="span" {...props} baka="text" />;
};
