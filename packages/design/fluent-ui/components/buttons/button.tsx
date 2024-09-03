import { BakaComponent, BakaProps } from "baka-ui";

type ButtonProps<T extends React.ElementType> = BakaProps<T>;

export const Button = <T extends React.ElementType = "button">(props: ButtonProps<T>) => {
  return <BakaComponent as="button" baka="button" {...props} />;
};
