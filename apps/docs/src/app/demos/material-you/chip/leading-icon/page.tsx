import { Chip, Icon, Text } from "baka-material-you";

export default async function ChipDemo() {
  return (
    <Chip>
      <Icon variant={"primary"}>local_taxi</Icon>
      <Text>Label</Text>
    </Chip>
  );
}
