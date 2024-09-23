import { BakaComponent, BakaProps } from "baka-ui";

export type AvatarProps<T extends React.ElementType = "span"> = BakaProps<
  T,
  "avatar"
> & {};

export const Avatar = <T extends React.ElementType = "span">(
  props: AvatarProps<T>
) => {
  return <BakaComponent as="span" {...props} baka="avatar" />;
};
