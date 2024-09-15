import { BakaComponent, BakaProps } from "baka-ui";

type LinkProps<T extends React.ElementType> = BakaProps<T, "link"> & {};

export const Link = <T extends React.ElementType = "a">(
  props: LinkProps<T>
) => {
  return <BakaComponent as="a" {...props} baka="link" />;
};
