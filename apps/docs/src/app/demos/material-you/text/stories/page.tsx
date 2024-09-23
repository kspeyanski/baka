import { Text, TextProps } from "baka-material-you";

export type TextStoryProps = {
  color: string;
  variant: string;
};

export const defaultProps = {
  text: "lorem ipsum",
  color: 'on-surface',
  variant: "body-medium",
};

const spec = {
  "display-large": "Roboto 57/64 -0.25",
  "display-medium": "Roboto 45/52 . 0",
  "display-small": "Roboto 36/44 . 0",
  "headline-large": "Roboto 32/40 . 0",
  "headline-medium": "Roboto 28/368 . 0",
  "headline-small": "Roboto 24/32 . 0",
  "title-large": "Roboto Regular 22/28 . 0",
  "title-medium": "Roboto Medium 16/24 . +0.15",
  "title-small": "Roboto Medium 14/20 . +0.1",
  "label-large": "Roboto Medium 14/20 . +0.1",
  "label-medium": "Roboto Medium 12/16 . +0.5",
  "label-small": "Roboto Medium 11/16 . +0.5",
  "body-large": "Roboto Regular 16/24 . +0.5",
  "body-medium": "Roboto Regular 14/20 . +0.25",
  "body-small": "Roboto Regular 12/16 . +0.4",
};

export default function TextStory(props: TextStoryProps) {
  const args = { ...defaultProps, ...props };

  return (
    <>
      <Text
        variant={
          [args.variant, args.color === "on-surface-variant" ? "variant" : undefined].filter(
            Boolean
          ) as TextProps["variant"]
        }
      >
        {args.text} &mdash; {spec[args.variant]}
      </Text>
    </>
  );
}
