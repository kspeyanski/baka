import { BakaText, BakaTextProps } from "baka-ui";
import clsx from "clsx";

export type TextProps = BakaTextProps;
export const Text: BakaText = (props) => {
  return <BakaText {...props} className={clsx("text", props.className)} />;
};
