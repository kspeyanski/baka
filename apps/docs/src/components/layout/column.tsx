import { BakaColumn, BakaColumnProps } from "baka-ui";
import clsx from "clsx";

export type ColumnProps = BakaColumnProps;

export const Column: BakaColumn = (props) => {
  return <BakaColumn {...props} className={clsx("column", props.className)} />;
};
