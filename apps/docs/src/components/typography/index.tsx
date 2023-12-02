import {
  BakaComponent,
  BakaHeading,
  BakaHeadingProps,
  BakaLabel,
  BakaLabelProps,
  BakaParagraph,
  BakaParagraphProps,
  BakaText,
  BakaTextProps,
} from "baka-ui";
import clsx from "clsx";

export type HeadingProps = BakaHeadingProps;
export const Heading: BakaComponent<"h1", HeadingProps> = (props) => {
  return <BakaHeading {...props} className={clsx("heading", props.className)} />;
};

export type TextProps = BakaTextProps;
export const Text: BakaComponent<"p", TextProps> = (props) => {
  return <BakaText {...props} className={clsx("text", props.className)} />;
};

export type LabelProps = BakaLabelProps;
export const Label: BakaComponent<"label", LabelProps> = (props) => {
  return <BakaLabel {...props} className={clsx("label", props.className)} />;
};

export type ParagraphProps = BakaParagraphProps;
export const Paragraph: BakaComponent<"p", ParagraphProps> = (props) => {
  return <BakaParagraph {...props} className={clsx("paragraph", props.className)} />;
};
