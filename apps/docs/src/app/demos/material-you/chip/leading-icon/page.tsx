import { BakaChip, BakaIcon, BakaText } from "baka-ui";

export default async function Chip() {
  return (
    <BakaChip>
      <BakaIcon variant={"primary"}>local_taxi</BakaIcon>
      <BakaText>Label</BakaText>
    </BakaChip>
  );
}
