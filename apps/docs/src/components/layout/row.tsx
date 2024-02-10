import { BakaRow, BakaRowProps } from "baka-ui";
import clsx from "clsx";

export type RowProps = BakaRowProps;

export const Row = (props: RowProps) => {
  return <BakaRow {...props} className={clsx("row", props.className)} />;
};
