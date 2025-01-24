import {
  Input as BakaInput,
  InputProps as BakaInputProps,
} from "baka-material-you";
import clsx from "clsx";

export type InputProps = BakaInputProps;

export const Input: typeof BakaInput = (props: InputProps) => {
  return <BakaInput {...props} className={clsx("input", props.className)} />;
};
