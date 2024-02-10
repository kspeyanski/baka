import { BakaChip, BakaChipProps, BakaComponent } from "baka-ui";
import clsx from "clsx";

export type ChipProps = BakaChipProps;

export const Chip: BakaComponent<"span", ChipProps> = (props: ChipProps) => {
  return <BakaChip {...props} className={clsx("chip", props.className)} />;
};
