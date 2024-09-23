import { Bar, BarProps, Button, Icon, Text } from "baka-material-you";

export type BarStoryProps = BarProps & {
  size?: "small" | "medium" | "large";
  position?: "top" | "bottom";
  elevated?: boolean;
  items?: number;
  fab?: boolean;
};
export const defaultProps: BarStoryProps = {
  position: "top",
  items: 3,
  fab: true,
  size: "medium",
  elevated: false,
};

export default function BarStory(props: BarStoryProps) {
  switch (props.position) {
    case "bottom":
      return (
        <Bar
          variant={"bottom"}
          style={{
            width: 400,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            {["circle", "change_history", "rectangle", "pentagon", "hexagon"]
              .slice(0, props.items)
              .map((shape) => (
                <Button key={shape} variant={"icon"}>
                  <Icon>{shape}</Icon>
                </Button>
              ))}
          </div>
          {props.fab ? (
            <Button variant={["fab", "secondary"]}>
              <Icon>add</Icon>
            </Button>
          ) : null}
        </Bar>
      );
    case "top":
    default:
      switch (props.size) {
        case "small":
          return (
            <Bar
              style={{ width: 404 }}
              variant={
                ["top", "small", props.elevated ? "elevated" : null].filter(
                  Boolean
                ) as BarProps["variant"]
              }
            >
              <Button variant={"icon"}>
                <Icon>menu</Icon>
              </Button>
              <Text
                variant="title-large"
                style={{ flexGrow: 1, textAlign: "center" }}
              >
                Product
              </Text>
              <Button variant={"icon"}>
                <Icon variant={"filled"}>account_circle</Icon>
              </Button>
            </Bar>
          );
        case "medium":
          return (
            <Bar
              style={{ width: 404 }}
              variant={
                ["top", "medium", props.elevated ? "elevated" : null].filter(
                  Boolean
                ) as BarProps["variant"]
              }
            >
              <div style={{ display: "flex", flex: 1 }}>
                <div style={{ flex: 1 }}>
                  <Button variant={"icon"}>
                    <Icon>arrow_back</Icon>
                  </Button>
                </div>
                <Button variant={"icon"}>
                  <Icon>attach_file</Icon>
                </Button>
                <Button variant={"icon"}>
                  <Icon>today</Icon>
                </Button>
                <Button variant={"icon"}>
                  <Icon>more_vert</Icon>
                </Button>
              </div>
              <div style={{ paddingInline: 16 }}>
                <Text
                  variant="title-large"
                  style={{ flexGrow: 1, textAlign: "left" }}
                >
                  Title
                </Text>
              </div>
            </Bar>
          );
        case "large":
          return (
            <Bar
              style={{ width: 404 }}
              variant={
                ["top", "large", props.elevated ? "elevated" : null].filter(
                  Boolean
                ) as BarProps["variant"]
              }
            >
              <div style={{ display: "flex", flex: 1 }}>
                <div style={{ flex: 1 }}>
                  <Button variant={"icon"}>
                    <Icon>arrow_back</Icon>
                  </Button>
                </div>
                <Button variant={"icon"}>
                  <Icon>attach_file</Icon>
                </Button>
                <Button variant={"icon"}>
                  <Icon>today</Icon>
                </Button>
                <Button variant={"icon"}>
                  <Icon>more_vert</Icon>
                </Button>
              </div>
              <div style={{ paddingInline: 16 }}>
                <Text
                  variant="title-large"
                  style={{ flexGrow: 1, textAlign: "left" }}
                >
                  Title
                </Text>
              </div>
            </Bar>
          );
      }
  }
}
