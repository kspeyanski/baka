import { Badge, BadgeProps } from "baka-material-you";

export type BadgeStoryProps = BadgeProps & {};
export const defaultProps: BadgeStoryProps = {
  variant: "single-digit",
};

export default function BadgeStory(props: BadgeStoryProps) {
  switch (props.variant) {
    case "small":
      return <Badge {...props} />;
    case "multi-digit":
      return <Badge {...props}>99+</Badge>;
    case "single-digit":
    default:
      return <Badge {...props}>3</Badge>;
  }
}
