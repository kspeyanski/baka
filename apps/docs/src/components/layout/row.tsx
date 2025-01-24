import { Row as BakaRow, RowProps as BakaRowProps } from "baka-material-you";
import clsx from "clsx";

export type RowProps = BakaRowProps;

export const Row: typeof BakaRow = (props) => {
  return <BakaRow {...props} className={clsx("row", props.className)} />;
};
