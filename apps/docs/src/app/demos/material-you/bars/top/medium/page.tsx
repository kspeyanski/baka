import { BakaButton, BakaBar, BakaIcon, BakaText } from "baka-ui";

export default async function Demo() {
  return (
    <BakaBar style={{ width: 404 }} variant={["top", "medium"]}>
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
    </BakaBar>
  );
}
