import { ListItem as BakaListItem, ListItemProps as BakaListItemProps } from "baka-material-you";
import clsx from "clsx";

type TableCellProps = React.HTMLAttributes<HTMLTableCellElement> & BakaListItemProps;

export const TableCell: typeof BakaListItem = (props: TableCellProps) => {
  const { children, className, ...rest } = props;

  return (
    <BakaListItem
      as="td"
      className={clsx("table-cell", className)}
      {...rest}
      // readOnly={true}
    >
      {children}
    </BakaListItem>
  );
};
