import { BakaComponent, BakaListItem } from "baka-ui";
import clsx from "clsx";

type TableHeaderCellProps = React.HTMLAttributes<HTMLTableCellElement>;

export const TableHeaderCell: BakaComponent<"th", TableHeaderCellProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <BakaListItem
      as="th"
      className={clsx("table-header-cell", className)}
      {...rest}
      readOnly={true}
    >
      {children}
    </BakaListItem>
  );
};
