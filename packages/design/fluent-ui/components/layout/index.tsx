import clsx from "clsx";
import { Baka, BakaProps, valueClassNames } from "baka-ui";

export type ColumnProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "column"
> & {
  columns?: number | null | (number | null)[];
};

export const Column = <T extends React.ElementType = "div">(
  props: ColumnProps<T>
) => {
  const { columns, as = "div", ...other } = props;

  return (
    <Baka
      as={as}
      {...other}
      baka="column"
      className={clsx(valueClassNames(columns), props.className)}
    />
  );
};

export type ContainerProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "container"
> & {};

export const Container = <T extends React.ElementType = "div">(
  props: ContainerProps<T>
) => {
  const { as = "div", ...other } = props;
  return <Baka as={as} {...other} baka="container" />;
};

export type RowProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "row"
> & {};

export const Row = <T extends React.ElementType = "div">(
  props: RowProps<T>
) => {
  const { as = "div", ...other } = props;
  return <Baka as={as} {...other} baka="row" />;
};
