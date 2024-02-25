import { BakaChip, BakaIcon, BakaLabel } from "baka-ui";

export default async function Chip() {
  return (
    <BakaChip variant={"elevated"}>
      <BakaLabel>Label</BakaLabel>
      <BakaIcon>close</BakaIcon>
    </BakaChip>
  );
}
