import { BakaButton, BakaButtonProps, BakaComponent } from "baka-ui";
import clsx from "clsx";

export type ButtonProps = BakaButtonProps;

export const Button: BakaComponent<"button", ButtonProps> = (props: ButtonProps) => {
  return <BakaButton {...props} className={clsx("button", props.className)} />;
};
