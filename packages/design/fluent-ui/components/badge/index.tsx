import { BakaComponent, BakaProps } from "baka-ui";

export type BadgeProps<T extends React.ElementType = "span"> = BakaProps<
  T,
  "badge"
> & {};

export const Badge = <T extends React.ElementType = "span">(
  props: BadgeProps<T>
) => {
  return <BakaComponent as="span" {...props} baka="badge" />;
};
