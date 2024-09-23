import { BakaComponent, BakaProps } from "baka-ui";

export type RadioProps<T extends React.ElementType = "input"> = BakaProps<
  T,
  "radio"
> & {};

export const Radio = <T extends React.ElementType = "input">(
  props: RadioProps<T>
) => {
  return <BakaComponent as="input" type="radio" {...props} baka="radio" />;
};
