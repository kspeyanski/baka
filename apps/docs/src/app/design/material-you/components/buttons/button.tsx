'use client';
import React from "react";
import clsx from "clsx";
import {
  Button as BakaButton,
  ButtonProps as BakaButtonProps,
} from "baka-material-you";

export type ButtonProps = BakaButtonProps &
  React.HTMLAttributes<HTMLButtonElement>;

export const Button: typeof BakaButton = (props) => {
  return <BakaButton {...props} className={clsx("button", props.className)} />;
};
