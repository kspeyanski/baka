import { Badge } from "baka-material-you";

export default async function Demo() {
  return (
    <>
      <Badge variant={"small"} />
      <br />
      <br />
      <Badge variant={"single-digit"}>4</Badge>
      <br />
      <br />
      <Badge variant={"multi-digit"}>14</Badge>
    </>
  );
}
