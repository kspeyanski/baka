import { BakaComponent, BakaProps } from "baka-ui";

export type SwitchProps<T extends React.ElementType = "input"> = BakaProps<
  T,
  "switch"
> & {};

export const Switch = <T extends React.ElementType = "input">(
  props: SwitchProps<T>
) => {
  return <BakaComponent as="input" type="checkbox" {...props} baka="switch" />;
};
