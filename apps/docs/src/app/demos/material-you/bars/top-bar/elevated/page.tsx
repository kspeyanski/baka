import { BakaButton, BakaTopBar, BakaIcon, BakaText } from "baka-ui";

export default async function Demo() {
  return (
    <BakaTopBar style={{ width: 404 }} variant={["large", "elevated"]}>
      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ flex: 1 }}>
          <BakaButton variant={"icon"}>
            <BakaIcon>arrow_back</BakaIcon>
          </BakaButton>
        </div>
        <BakaButton variant={"icon"}>
          <BakaIcon>attach_file</BakaIcon>
        </BakaButton>
        <BakaButton variant={"icon"}>
          <BakaIcon>today</BakaIcon>
        </BakaButton>
        <BakaButton variant={"icon"}>
          <BakaIcon>more_vert</BakaIcon>
        </BakaButton>
      </div>
      <div style={{ paddingInline: 16 }}>
        <BakaText variant="title-large" style={{ flexGrow: 1, textAlign: "left" }}>
          Title
        </BakaText>
      </div>
    </BakaTopBar>
  );
}
