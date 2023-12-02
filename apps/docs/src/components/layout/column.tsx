import { BakaColumn, BakaColumnProps } from "baka-ui";
import clsx from "clsx";

export type ColumnProps = BakaColumnProps;

export const Column = (props: ColumnProps) => {
  return <BakaColumn {...props} className={clsx("column", props.className)} />;
};
