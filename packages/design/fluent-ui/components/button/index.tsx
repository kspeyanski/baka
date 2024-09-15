import { BakaComponent, BakaProps } from "baka-ui";

type ButtonProps<T extends React.ElementType> = BakaProps<T, "button"> & {};

export const Button = <T extends React.ElementType = "button">(
  props: ButtonProps<T>
) => {
  return <BakaComponent as="button" {...props} baka="button" />;
};
