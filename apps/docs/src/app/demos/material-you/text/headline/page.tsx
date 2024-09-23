import { Card, Text } from "baka-material-you";

export default function HeadlineDemo() {
  return (
    <Card style={{ padding: 24 }}>
      <Text variant={"headline-large"}>Headline Large &mdash; Roboto 32/40 . 0</Text>
      <Text variant={"headline-medium"}>Headline Medium &mdash; Roboto 28/36 . 0</Text>
      <Text variant={"headline-small"}>Headline Small &mdash; Roboto 24/32 . 0</Text>
    </Card>
  );
}
