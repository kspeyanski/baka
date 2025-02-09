import { Baka, BakaProps } from "baka-ui";

export type FieldProps<T extends React.ElementType = "span"> = BakaProps<
  T,
  "field"
> & {};

export const Field = <T extends React.ElementType = "span">(
  props: FieldProps<T>
) => {
  return <Baka as="span" {...props} baka="field" />;
};
