import { Baka, BakaProps } from "baka-ui";

export type InputProps<T extends React.ElementType = "input"> = BakaProps<
  T,
  "input"
> & {};

export const Input = <T extends React.ElementType = "input">(
  props: InputProps<T>
) => {
  return <Baka as="input" {...props} baka="input" />;
};
