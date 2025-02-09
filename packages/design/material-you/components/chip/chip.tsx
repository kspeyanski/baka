import { Baka, BakaProps } from "baka-ui";

export type ChipProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "chip"
> & {};

export const Chip = <T extends React.ElementType = "div">(
  props: ChipProps<T>
) => {
  return <Baka as="div" {...props} baka="chip" />;
};
