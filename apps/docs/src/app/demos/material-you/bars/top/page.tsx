import { BakaBar, BakaButton, BakaIcon, BakaText } from "baka-ui";

export default async function Demo() {
  return (
    <>
      <BakaBar style={{ width: 404 }} variant="top">
        <BakaButton variant={"icon"}>
          <BakaIcon>menu</BakaIcon>
        </BakaButton>
        <BakaText variant="title-large" style={{ flexGrow: 1, textAlign: "center" }}>
          Product
        </BakaText>
        <BakaButton variant={"icon"}>
          <BakaIcon variant={"filled"}>account_circle</BakaIcon>
        </BakaButton>
      </BakaBar>
    </>
  );
}
