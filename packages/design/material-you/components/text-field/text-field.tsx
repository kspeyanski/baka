import { BakaComponent, BakaProps } from "baka-ui";

export type TextFieldProps<T extends React.ElementType = "span"> = BakaProps<
  T,
  "text-field"
> & {};

export const TextField = <T extends React.ElementType = "span">(
  props: TextFieldProps<T>
) => {
  return <BakaComponent as="span" {...props} baka="text-field" />;
};
