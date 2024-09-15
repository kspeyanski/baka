import { BakaComponent, BakaProps } from "baka-ui";

export type FieldProps<T extends React.ElementType = "span"> = BakaProps<
  T,
  "field"
> & {};

export const Field = <T extends React.ElementType = "span">(
  props: FieldProps<T>
) => {
  return <BakaComponent as="span" {...props} baka="field" />;
};
