import { Card, Avatar, Text } from "baka-material-you";

export default async function Demo() {
  return (
    <Card variant={"horizontal"} style={{ width: 360 }}>
      <div style={{ display: "flex", flexGrow: 1, gap: 16, padding: 16, alignItems: "center" }}>
        <Avatar>
          <span>A</span>
        </Avatar>
        <div style={{ display: "flex", flexGrow: 1, flexDirection: "column", gap: 4 }}>
          <Text variant="title-medium">Header</Text>
          <Text variant="body-medium">Subhead</Text>
        </div>
      </div>

      <img src="/media-small.png" alt="media" width={80} height={80} />
    </Card>
  );
}
