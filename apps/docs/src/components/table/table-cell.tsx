import { BakaComponent, BakaListItem } from "baka-ui";
import clsx from "clsx";

type TableCellProps = React.HTMLAttributes<HTMLTableCellElement>;

export const TableCell: BakaComponent<"td", TableCellProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <BakaListItem as="td" className={clsx("table-cell", className)} {...rest} readOnly={true}>
      {children}
    </BakaListItem>
  );
};
