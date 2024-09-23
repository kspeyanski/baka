import { Divider, DividerProps } from "baka-material-you";

export type DividerStoryProps = DividerProps & {
  orientation?: "horizontal" | "vertical";
};

export const defaultProps: DividerStoryProps = {
  orientation: "horizontal",
};

export default function DividerStoryDemo(props: DividerStoryProps) {
  const args = { ...defaultProps, ...props };

  return args.orientation === "horizontal" ? (
    <Divider style={{ width: 300 }} />
  ) : (
    <Divider style={{ width: 1, height: 300 }} />
  );
}
