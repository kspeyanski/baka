import { BakaComponent, BakaProps } from "baka-ui";

export type DropdownProps<T extends React.ElementType = "span"> = BakaProps<
  T,
  "dropdown"
> & {};

export const Dropdown = <T extends React.ElementType = "span">(
  props: DropdownProps<T>
) => {
  return <BakaComponent as="button" {...props} baka="dropdown" />;
};
