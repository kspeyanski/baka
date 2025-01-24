import { TextField as  BakaTextField, TextFieldProps as BakaTextFieldProps } from "baka-material-you";
import clsx from "clsx";

export type TextFieldProps = BakaTextFieldProps;

export const TextField: typeof BakaTextField = (props: TextFieldProps) => {
  return <BakaTextField {...props} className={clsx("text-field", props.className)} />;
};
