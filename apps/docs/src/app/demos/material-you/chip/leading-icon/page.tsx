import { BakaChip, BakaIcon, BakaLabel } from "baka-ui";

export default async function Chip() {
  return (
    <BakaChip>
      <BakaIcon variant={"primary"}>local_taxi</BakaIcon>
      <BakaLabel>Label</BakaLabel>
    </BakaChip>
  );
}
