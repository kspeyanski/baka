import { BakaComponent, BakaProps } from "baka-ui";

export type IconProps<T extends React.ElementType = "i"> = BakaProps<
  T,
  "icon"
> & {};

export const Icon = <T extends React.ElementType = "i">(
  props: IconProps<T>
) => {
  return <BakaComponent {...props} as={"span"} baka="icon" />;
};
