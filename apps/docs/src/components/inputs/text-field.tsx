import { BakaTextField, BakaTextFieldProps, BakaComponent } from "baka-ui";
import clsx from "clsx";

export type TextFieldProps = BakaTextFieldProps;

export const TextField: BakaComponent<"span", TextFieldProps> = (props: TextFieldProps) => {
  return <BakaTextField {...props} className={clsx("text-field", props.className)} />;
};
