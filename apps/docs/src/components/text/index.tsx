import { Text as BakaText, TextProps as BakaTextProps } from "baka-material-you";
import clsx from "clsx";

export type TextProps = BakaTextProps;
export const Text: typeof BakaText = (props: TextProps) => {
  return <BakaText {...props} className={clsx("text", props.className)} />;
};
