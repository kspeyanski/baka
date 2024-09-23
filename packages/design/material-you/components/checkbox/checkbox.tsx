import { BakaComponent, BakaProps } from "baka-ui";

export type CheckboxProps<T extends React.ElementType = "input"> = BakaProps<
  T,
  "checkbox"
> & {};

export const Checkbox = <T extends React.ElementType = "input">(
  props: CheckboxProps<T>
) => {
  return (
    <BakaComponent as="input" type="checkbox" {...props} baka="checkbox" />
  );
};
