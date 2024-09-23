import { Button, Text, Tooltip } from "baka-material-you";

export default function RichTooltipDemo() {
  return (
    <div style={{ display: "grid", gridRowGap: 16, alignItems: "center", justifyItems: "center" }}>
      <Tooltip variant={"rich"} style={{ width: 312 }}>
        <div style={{ padding: "12px 16px 8px", display: "flex", flexDirection: "column", gap: 4 }}>
          <Text variant={"title-small"}>Title</Text>
          <Text variant={["body-medium", "variant"]}>
            Supporting line text lorem ipsum dolor sit amet, consectetur.
          </Text>
        </div>
        <div style={{ padding: "0 8px", display: "flex", gap: 8 }}>
          <Button>Action</Button>
          <Button>Action</Button>
        </div>
      </Tooltip>
      <Tooltip variant={"rich"} style={{ width: 312 }}>
        <div style={{ padding: "12px 16px 8px", display: "flex", flexDirection: "column", gap: 4 }}>
          <Text variant={"title-small"}>Title</Text>
          <Text variant={["body-medium", "variant"]}>
            Supporting line text lorem ipsum dolor sit amet, consectetur.
          </Text>
        </div>
      </Tooltip>
    </div>
  );
}
