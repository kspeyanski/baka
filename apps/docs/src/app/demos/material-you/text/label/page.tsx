import { Card, Text } from "baka-material-you";

export default function LabelDemo() {
  return (
    <Card style={{ padding: 24 }}>
      <Text variant={"label-large"}>Label Large &mdash; Roboto Medium 14/20 . +0.1</Text>
      <Text variant={"label-medium"}>Label Medium &mdash; Roboto Medium 12/16 . +0.5</Text>
      <Text variant={"label-small"}>Label Small &mdash; Roboto Medium 11/16 . +0.5</Text>
    </Card>
  );
}
