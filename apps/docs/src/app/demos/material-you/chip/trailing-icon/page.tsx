import { BakaChip, BakaIcon, BakaText } from "baka-ui";

export default async function Chip() {
  return (
    <BakaChip variant={"elevated"}>
      <BakaText>Label</BakaText>
      <BakaIcon>close</BakaIcon>
    </BakaChip>
  );
}
