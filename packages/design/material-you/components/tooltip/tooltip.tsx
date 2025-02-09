import { Baka, BakaProps } from "baka-ui";

export type TooltipProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "tooltip"
> & {};

export const Tooltip = <T extends React.ElementType = "div">(
  props: TooltipProps<T>
) => {
  return <Baka as="div" type="tooltip" {...props} baka="tooltip" />;
};
