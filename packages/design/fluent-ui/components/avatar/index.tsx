import { BakaComponent, BakaProps } from "baka-ui";

type AvatarProps<T extends React.ElementType> = BakaProps<T, "avatar"> & {};

export const Avatar = <T extends React.ElementType = "span">(
  props: AvatarProps<T>
) => {
  return <BakaComponent as="span" {...props} baka="avatar" />;
};
