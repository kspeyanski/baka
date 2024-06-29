import { BakaButton, BakaButtonProps } from "baka-ui";
import clsx from "clsx";
import React from "react";

export type ButtonProps = BakaButtonProps & React.HTMLAttributes<HTMLButtonElement>;

export const Button: BakaButton = (props) => {
  return <BakaButton {...props} className={clsx("button", props.className)} />;
};
