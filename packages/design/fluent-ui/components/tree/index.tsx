import { Baka, BakaProps } from "baka-ui";

export type TreeProps<T extends React.ElementType = "ul"> = BakaProps<
  T,
  "tree"
> & {};

export const Tree = <T extends React.ElementType = "ul">(
  props: TreeProps<T>
) => {
  return <Baka as="ul" {...props} baka="tree" />;
};

export const TreeItem = <T extends React.ElementType = "li">(
  props: BakaProps<T, "tree-item">
) => {
  return <Baka as="li" {...props} baka="tree-item" />;
};
