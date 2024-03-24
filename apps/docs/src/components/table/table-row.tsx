import { BakaComponent } from "baka-ui";
import clsx from "clsx";

type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;

export const TableRow: BakaComponent<"tr", TableRowProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <tr className={clsx("tr", className)} {...rest}>
      {children}
    </tr>
  );
};
