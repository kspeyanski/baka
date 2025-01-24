import clsx from "clsx";

type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;

export const TableRow = (props: TableRowProps) => {
  const { children, className, ...rest } = props;

  return (
    <tr className={clsx("tr", className)} {...rest}>
      {children}
    </tr>
  );
};
