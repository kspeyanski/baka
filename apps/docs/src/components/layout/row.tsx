import { BakaRow, BakaRowProps } from "baka-ui";

export type RowProps = BakaRowProps;

export const Row = (props: RowProps) => {
  return <BakaRow {...props} className="row" />;
};
