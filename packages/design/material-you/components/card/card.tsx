import { BakaComponent, BakaProps } from "baka-ui";

export type CardProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "card"
> & {};

export const Card = <T extends React.ElementType = "div">(
  props: CardProps<T>
) => {
  return <BakaComponent as="div" {...props} baka="card" />;
};
