import { Baka, BakaProps } from "baka-ui";

export type LinkProps<T extends React.ElementType = "a"> = BakaProps<
  T,
  "link"
> & {};

export const Link = <T extends React.ElementType = "a">(
  props: LinkProps<T>
) => {
  return <Baka as="a" {...props} baka="link" />;
};
