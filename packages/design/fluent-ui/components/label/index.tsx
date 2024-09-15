import { BakaComponent, BakaProps } from "baka-ui";

type LabelProps<T extends React.ElementType> = BakaProps<T, "label"> & {};

export const Label = <T extends React.ElementType = "label">(
  props: LabelProps<T>
) => {
  return <BakaComponent as="label" {...props} baka="label" />;
};
