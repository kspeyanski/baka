import { Card, Text } from "baka-material-you";

export default function TitleDemo() {
  return (
    <Card style={{ padding: 24 }}>
      <Text variant={"title-large"}>Title Large &mdash; Roboto Regular 22/28 . 0</Text>
      <Text variant={"title-medium"}>Title Medium &mdash; Roboto Medium 16/24 . +0.15</Text>
      <Text variant={"title-small"}>Title Small &mdash; Roboto Medium 14/20 . +0.1</Text>
    </Card>
  );
}
