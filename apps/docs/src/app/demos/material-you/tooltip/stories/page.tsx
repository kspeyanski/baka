import { Button, Text, Tooltip } from "baka-material-you";

export type TooltipStoryProps = {
  variant: string;
  text: string;
  buttons: boolean;
};

export const defaultProps = {
  variant: "plain",
  buttons: true,
  text: "Supporting text Body text string goes here psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
};

export default function TooltipStory(props: TooltipStoryProps) {
  const args = { ...defaultProps, ...props };

  switch (args.variant) {
    default:
    case "plain":
      console.log("here");
      return (
        <Tooltip style={{ maxWidth: 316 }} variant={"plain"}>
          {args.text}
        </Tooltip>
      );
    case "rich":
      return (
        <Tooltip style={{ maxWidth: 316 }} variant={"rich"}>
          <div
            style={{ padding: "12px 16px 8px", display: "flex", flexDirection: "column", gap: 4 }}
          >
            <Text variant={"title-small"}>Title</Text>
            <Text variant={["body-medium", "variant"]}>{args.text}</Text>
          </div>
          {args.buttons ? (
            <div style={{ padding: "0 8px", display: "flex", gap: 8 }}>
              <Button>Action</Button>
              <Button>Action</Button>
            </div>
          ) : null}
        </Tooltip>
      );
  }
}
