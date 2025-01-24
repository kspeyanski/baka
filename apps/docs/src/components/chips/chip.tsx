import {
  Chip as BakaChip,
  ChipProps as BakaChipProps,
} from "baka-material-you";
import clsx from "clsx";

export type ChipProps = BakaChipProps;

export const Chip: typeof BakaChip = (props: ChipProps) => {
  return <BakaChip {...props} className={clsx("chip", props.className)} />;
};
