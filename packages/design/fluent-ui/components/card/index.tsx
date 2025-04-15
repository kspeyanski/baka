import { Baka, BakaProps } from "baka-ui";

export type CardProps<T extends React.ElementType = "span"> = BakaProps<
  T,
  "card"
> & {};

export const Card = <T extends React.ElementType = "span">(
  props: CardProps<T>
) => {
  return <Baka as="div" {...props} baka="card" />;
};
