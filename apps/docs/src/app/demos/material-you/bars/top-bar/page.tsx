import { BakaButton, BakaIcon, BakaText, BakaTopBar } from "baka-ui";

export default async function Demo() {
  return (
    <>
      <BakaTopBar style={{ width: 404 }}>
        <BakaButton variant={"icon"}>
          <BakaIcon>menu</BakaIcon>
        </BakaButton>
        <BakaText variant="title-large" style={{ flexGrow: 1, textAlign: "center" }}>
          Product
        </BakaText>
        <BakaButton variant={"icon"}>
          <BakaIcon variant={"filled"}>account_circle</BakaIcon>
        </BakaButton>
      </BakaTopBar>
    </>
  );
}
