import { BakaInput, BakaInputProps, BakaComponent } from "baka-ui";
import clsx from "clsx";

export type InputProps = BakaInputProps;

export const Input: BakaComponent<"input", InputProps> = (props: InputProps) => {
  return <BakaInput {...props} className={clsx("input", props.className)} />;
};
