import { BakaComponent, BakaProps } from "baka-ui";

export type ButtonProps<T extends React.ElementType = "button"> = BakaProps<
  T,
  "button"
> & {};

export const Button = <T extends React.ElementType = "button">(
  props: ButtonProps<T>
) => {
  return <BakaComponent as="button" {...props} baka="button" />;
};
