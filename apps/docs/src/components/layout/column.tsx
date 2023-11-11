import { BakaColumn, BakaColumnProps } from "baka-ui";

export type ColumnProps = BakaColumnProps;

export const Column = (props: ColumnProps) => {
  return <BakaColumn {...props} className="katana-column" />;
};
