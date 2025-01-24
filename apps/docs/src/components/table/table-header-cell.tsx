import { ListItem as BakaListItem } from "baka-material-you";
import clsx from "clsx";

type TableHeaderCellProps = React.HTMLAttributes<HTMLTableCellElement>;

export const TableHeaderCell = (props: TableHeaderCellProps) => {
  const { children, className, ...rest } = props;

  return (
    <BakaListItem
      as="th"
      className={clsx("table-header-cell", className)}
      {...rest}
      // readOnly={true}
    >
      {children}
    </BakaListItem>
  );
};
