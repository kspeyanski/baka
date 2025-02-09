import { Baka, BakaProps } from "baka-ui";

export type ListProps<T extends React.ElementType = "ul"> = BakaProps<
  T,
  "list"
> & {};

export const List = <T extends React.ElementType = "ul">(
  props: ListProps<T>
) => {
  return <Baka as="ul" {...props} baka="list" />;
};

export type ListItemProps<T extends React.ElementType = "i"> = BakaProps<
  T,
  "list-item"
> & {};

export const ListItem = <T extends React.ElementType = "li">(
  props: ListItemProps<T>
) => {
  return <Baka as="li" {...props} baka="list-item" />;
};
