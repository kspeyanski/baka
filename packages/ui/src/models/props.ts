export type IsomorphicComponentProps<
  E extends React.ElementType | React.ComponentType,
  P extends object = {}
> = Omit<React.ComponentPropsWithoutRef<E>, "as"> & {
  as?: E;
  forwardedAs?: React.ComponentPropsWithoutRef<E> extends { as?: E }
    ? React.ComponentPropsWithoutRef<E>["as"]
    : never;
} & P;

export type IsomorphicComponent<
  DE extends React.ElementType | React.ComponentType,
  P extends object
> = <E extends React.ElementType | React.ComponentType = DE>(
  props: IsomorphicComponentProps<E, P>
) => React.ReactElement | Promise<React.ReactElement>;
