import { Card, Text } from "baka-material-you";

export default function DisplayDemo() {
  return (
    <Card style={{ padding: 24 }}>
      <Text variant={"display-large"}>
        Display Large <br /> &mdash; Roboto 57/64 -0.25
      </Text>
      <Text variant={"display-medium"}>
        Display Medium <br /> &mdash; Roboto 45/52 . 0
      </Text>
      <Text variant={"display-small"}>
        Display Small <br /> &mdash; Roboto 36/44 . 0
      </Text>
    </Card>
  );
}
