import classNames from "./layout.module.scss";
import { Baka, BakaProps, modulesClassNames } from "baka-ui";
import clsx from "clsx";
import { valueClassNames } from "baka-ui";

console.log(classNames);

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
      className={clsx(
        valueClassNames(columns, classNames),
        modulesClassNames("column", classNames, props),
        props.className
      )}
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
  return (
    <Baka
      as="div"
      {...props}
      baka="container"
      className={clsx(
        props.className,
        modulesClassNames("container", classNames, props)
      )}
    />
  );
};

export type RowProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "row"
> & {};

export const Row = <T extends React.ElementType = "div">(
  props: RowProps<T>
) => {
  return (
    <Baka
      as="div"
      {...props}
      baka="row"
      className={clsx(
        props.className,
        modulesClassNames("row", classNames, props)
      )}
    />
  );
};
