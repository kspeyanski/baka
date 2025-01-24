import clsx from "clsx";

import { Card as BakaCard, CardProps as BakaCardProps } from "baka-material-you";

export type CardProps = BakaCardProps;
export const Card: typeof BakaCard = (props) => {
  return <BakaCard {...props} className={clsx("card", props.className)} />;
};
