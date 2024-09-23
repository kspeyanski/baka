import {
  Badge,
  Button,
  Divider,
  Icon,
  Navigation,
  NavigationItem,
  NavigationProps,
  Text,
} from "baka-material-you";

export type NavigationStoryProps = NavigationProps & {
  type: "side" | "bottom" | "rail";
  labels: boolean;
  items: number;
  icons: boolean;
  align: "top" | "center" | "bottom";
};
export const defaultProps: NavigationStoryProps = {
  type: "bottom",
  labels: true,
  icons: true,
  items: 3,
  align: "top",
};
export default function NavigationStory(props: NavigationStoryProps) {
  const { type, labels, items, icons, align, ...other } = props;

  switch (type) {
    case "side":
      return (
        <Navigation variant={"side"} style={{ width: 300 }}>
          <div style={{ padding: "18px 16px" }}>
            <Text variant={"title-small"}>Title</Text>
          </div>
          <div style={{ padding: "18px 16px" }}>
            <Text variant={"title-small"}>Section header</Text>
          </div>
          <NavigationItem state={{ selected: true }}>
            {icons ? <Icon variant={"filled"}>fiber_manual_record</Icon> : null}
            <Text variant={"label-medium"}>Label</Text>
            <Text variant={"label-medium"}>100+</Text>
          </NavigationItem>
          <NavigationItem>
            {icons ? <Icon variant={"filled"}>fiber_manual_record</Icon> : null}
            <Text variant={"label-medium"}>Label</Text>
            <Text variant={"label-medium"}>100+</Text>
          </NavigationItem>
          <NavigationItem>
            {icons ? <Icon variant={"filled"}>fiber_manual_record</Icon> : null}
            <Text variant={"label-medium"}>Label</Text>
            <Text variant={"label-medium"}>100+</Text>
          </NavigationItem>
          <Divider />
          <div style={{ padding: "18px 16px" }}>
            <Text variant={"title-small"}>Section header</Text>
          </div>
          <NavigationItem>
            {icons ? <Icon variant={"filled"}>fiber_manual_record</Icon> : null}
            <Text variant={"label-medium"}>Label</Text>
          </NavigationItem>
          <NavigationItem>
            {icons ? <Icon variant={"filled"}>fiber_manual_record</Icon> : null}
            <Text variant={"label-medium"}>Label</Text>
          </NavigationItem>
          <NavigationItem>
            {icons ? <Icon variant={"filled"}>fiber_manual_record</Icon> : null}
            <Text variant={"label-medium"}>Label</Text>
          </NavigationItem>
        </Navigation>
      );
    case "bottom":
    default:
      return (
        <Navigation variant={"bottom"} style={{ width: 400 }}>
          <NavigationItem state={{ selected: true }}>
            <Icon variant={"filled"}>fiber_manual_record</Icon>
            {labels ? <Text variant={"label-medium"}>Label</Text> : null}
          </NavigationItem>
          {Array.from({ length: items - 2 }, (_, i) => (
            <NavigationItem key={i}>
              <Icon variant={"filled"}>fiber_manual_record</Icon>
              {labels ? <Text variant={"label-medium"}>Label</Text> : null}
            </NavigationItem>
          ))}
          <NavigationItem>
            <Icon variant={"filled"}>
              fiber_manual_record
              {labels ? (
                <Badge
                  variant={"single-digit"}
                  style={{ position: "absolute", right: 16, top: 2 }}
                >
                  3
                </Badge>
              ) : (
                <Badge
                  variant={"small"}
                  style={{ position: "absolute", right: 16, top: 2 }}
                />
              )}
            </Icon>
            {labels ? <Text variant={"label-medium"}>Label</Text> : null}
          </NavigationItem>
        </Navigation>
      );
    case "rail":
      return (
        <Navigation variant={"rail"} style={{ height: "calc(100vh - 100px)" }}>
          <div
            style={{
              display: "flex",
              gap: 4,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "stretch",
            }}
          >
            <Button variant="icon">
              <Icon>menu</Icon>
            </Button>
            {
              <Button variant={["fab", "tertiary"]}>
                <Icon>mode_edit</Icon>
              </Button>
            }
          </div>
          <div
            style={
              align === "center"
                ? { margin: "auto" }
                : align === "bottom"
                ? { marginTop: "auto" }
                : {}
            }
          >
            <NavigationItem state={{ selected: true }}>
              <Icon variant={"filled"}>fiber_manual_record</Icon>
              {labels ? <Text>Text</Text> : null}
            </NavigationItem>
            <NavigationItem>
              <Icon variant={"filled"}>fiber_manual_record</Icon>
            </NavigationItem>
            <NavigationItem>
              <Icon variant={"filled"}>fiber_manual_record</Icon>
            </NavigationItem>
            <NavigationItem>
              <Icon variant={"filled"}>fiber_manual_record</Icon>
            </NavigationItem>
          </div>
        </Navigation>
      );
  }
}
