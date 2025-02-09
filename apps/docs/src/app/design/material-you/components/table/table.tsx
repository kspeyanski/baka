import {
  List as BakaList,
  ListProps as BakaListProps,
} from "baka-material-you";
import clsx from "clsx";

type TableProps = BakaListProps;

export const Table: typeof BakaList = (props: TableProps) => {
  const { children, className, ...rest } = props;

  return (
    <BakaList as={"table"} className={clsx("table", className)} {...rest}>
      {children}
    </BakaList>
  );
};
