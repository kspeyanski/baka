import { Column as BakaColumn, ColumnProps as BakaColumnProps } from "baka-material-you";
import clsx from "clsx";

export type ColumnProps = BakaColumnProps;

export const Column: typeof BakaColumn = (props) => {
  return <BakaColumn {...props} className={clsx("column", props.className)} />;
};
