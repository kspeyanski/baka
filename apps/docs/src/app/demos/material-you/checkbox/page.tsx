import { BakaCheckbox } from "baka-ui";

export default async function Demo() {
  return (
    <>
      <BakaCheckbox readOnly checked />
      <br />
      <br />
      <BakaCheckbox readOnly indeterminate />
      <br />
      <br />
      <BakaCheckbox />
      <br />
      <br />
      <BakaCheckbox readOnly checked variant={"error"} />
      <br />
      <br />
      <BakaCheckbox readOnly indeterminate variant={"error"} />
      <br />
      <br />
      <BakaCheckbox readOnly variant={"error"} />
    </>
  );
}
