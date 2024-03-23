import clsx from "clsx";

import { BakaCard, BakaCardProps } from "baka-ui";

export type CardProps = BakaCardProps;
export const Card: BakaCard = (props) => {
  return <BakaCard {...props} className={clsx("card", props.className)} />;
};
