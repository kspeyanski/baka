import { Chip, Icon, Text } from "baka-material-you";

export default async function ChipDemo() {
  return (
    <Chip variant={"elevated"}>
      <Text>Label</Text>
      <Icon>close</Icon>
    </Chip>
  );
}
