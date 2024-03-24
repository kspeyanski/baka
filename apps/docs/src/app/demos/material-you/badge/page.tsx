import { BakaBadge } from "baka-ui";

export default async function Demo() {
  return (
    <>
      <BakaBadge variant={"small"} />
      <br />
      <br />
      <BakaBadge variant={"single-digit"}>4</BakaBadge>
      <br />
      <br />
      <BakaBadge variant={"multi-digit"}>14</BakaBadge>
    </>
  );
}
