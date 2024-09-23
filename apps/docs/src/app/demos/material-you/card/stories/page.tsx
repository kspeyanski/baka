import { Avatar, Button, Card, CardProps, Icon, Text } from "baka-material-you";

export type CardStoryProps = CardProps & {
  type: "vertical" | "horizontal";
};
export const defaultProps: CardStoryProps = {
  type: "vertical",
};

export default function CardStory(props: CardStoryProps) {
  const { type, ...other } = { ...defaultProps, ...props };

  switch (type) {
    case "horizontal":
      return (
        <Card variant={["horizontal", other.variant]} style={{ width: 360 }}>
          <div style={{ display: "flex", flexGrow: 1, gap: 16, padding: 16, alignItems: "center" }}>
            <Avatar>
              <span>A</span>
            </Avatar>
            <div style={{ display: "flex", flexGrow: 1, flexDirection: "column", gap: 4 }}>
              <Text variant="title-medium">Header</Text>
              <Text variant="body-medium">Subhead</Text>
            </div>
          </div>

          <img src="./media-small.png" alt="media" width={80} height={80} />
        </Card>
      );
    case "vertical":
    default: {
      return (
        <Card {...other} style={{ width: 360 }}>
          <div
            style={{
              display: "flex",
              padding: "12px 4px 12px 16px",
              alignSelf: "stretch",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <Avatar>
                <span>A</span>
              </Avatar>
              <Text style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Text variant={"title-medium"}>Header</Text>
                <Text variant={"body-medium"}>Subhead</Text>
              </Text>
            </div>
            <Button variant={["icon"]}>
              <Icon>more_vert</Icon>
            </Button>
          </div>
          <div>
            <img
              src="./media.png"
              alt="media"
              width={720}
              height={376}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignSelf: "stretch",
              flexDirection: "column",
              gap: 32,
              padding: 16,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Text variant={"body-large"}>Title</Text>
              <Text variant={"body-medium"}>Subhead</Text>
            </div>
            <Text variant={"body-medium"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </Text>
            <div
              style={{ display: "flex", alignSelf: "stretch", justifyContent: "flex-end", gap: 8 }}
            >
              <Button variant={["outlined"]}>Enabled</Button>
              <Button variant={["filled"]}>Enabled</Button>
            </div>
          </div>
        </Card>
      );
    }
  }
  //   return <Card {...other}></Card>;
}
