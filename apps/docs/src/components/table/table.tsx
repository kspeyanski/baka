import { BakaComponent, BakaList, BakaListProps } from "baka-ui";
import clsx from "clsx";

type TableProps = BakaListProps;

export const Table = (props: TableProps) => {
  const { children, className, ...rest } = props;

  return (
    <BakaList as={"table"} className={clsx("table", className)} {...rest}>
      {children}
    </BakaList>
  );
};
