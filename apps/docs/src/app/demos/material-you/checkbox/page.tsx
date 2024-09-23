import { Checkbox } from "baka-material-you";

export default async function Demo() {
  return (
    <>
      <Checkbox readOnly checked />
      <br />
      <br />
      <Checkbox readOnly state={{ indeterminate: true }} />
      <br />
      <br />
      <Checkbox />
      <br />
      <br />
      <Checkbox readOnly checked variant={"error"} />
      <br />
      <br />
      <Checkbox readOnly state={{ indeterminate: true }} variant={"error"} />
      <br />
      <br />
      <Checkbox readOnly variant={"error"} />
    </>
  );
}
