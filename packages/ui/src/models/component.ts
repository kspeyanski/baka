import React from "react";

type PropsOf<T extends React.ElementType> = React.ComponentPropsWithRef<T>;

type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>["ref"];

export type PolymorphicProps<T extends React.ElementType = React.ElementType, TProps = {}> = {
  as?: T;
} & TProps &
  Omit<PropsOf<T>, keyof TProps | "as" | "ref"> & { ref?: PolymorphicRef<T> };

export type PolymorphicPropsWithRef<C extends React.ElementType, Props = {}> = PolymorphicProps<
  C,
  Props
> & { ref?: PolymorphicRef<C> };

export type PolymorphicComponent<E extends React.ElementType = "div", Props = {}> = <
  C extends React.ElementType = E
>(
  props: PolymorphicProps<C, Props>
) => JSX.Element;
