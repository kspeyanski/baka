import classNames from "./card.module.scss";
import { BakaProps, Baka } from "baka-ui";

export type CardProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "card"
> & {};

export const Card = <T extends React.ElementType = "div">(
  props: CardProps<T>
) => {
  return (
    <Baka
      as="div"
      {...props}
      baka="card"
      classNames={{ ...props.classNames, ...classNames }}
    />
  );
};
