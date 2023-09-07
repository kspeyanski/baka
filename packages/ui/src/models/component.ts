export type BakaComponentProps<
  E extends React.ElementType | React.ComponentType,
  P extends object
> = Omit<React.ComponentPropsWithoutRef<E>, "as"> & {
  as?: E;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  id?: string;
  forwardedAs?: React.ComponentPropsWithoutRef<E> extends { as?: E }
    ? React.ComponentPropsWithoutRef<E>["as"]
    : never;
} & P;

export type BakaComponent<DE extends React.ElementType | React.ComponentType, P extends object> = <
  E extends React.ElementType | React.ComponentType = DE
>(
  props: BakaComponentProps<E, P>
) => React.ReactElement;
