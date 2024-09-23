import { Card, Text } from "baka-material-you";

export default function BodyDemo() {
  return (
    <Card style={{ padding: 24 }}>
      <Text variant={"body-large"}>Body Large &mdash; Roboto 16/24 . +0.5</Text>
      <Text variant={"body-medium"}>Body Medium &mdash; Roboto 14/20 . +0.25</Text>
      <Text variant={"body-small"}>Body Small &mdash; Roboto 12/16 . +0.4</Text>
    </Card>
  );
}
