import {
  BakaCard,
  BakaAvatar,
  BakaText,
  BakaButton,
  BakaIcon,
} from "baka-ui";

export default async function Demo() {
  return (
    <BakaCard style={{ width: 360 }}>
      <div
        style={{
          display: "flex",
          padding: "12px 4px 12px 16px",
          alignSelf: "stretch",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <BakaAvatar>
            <span>A</span>
          </BakaAvatar>
          <BakaText style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <BakaText variant={"title-medium"}>Header</BakaText>
            <BakaText variant={"body-medium"}>Subhead</BakaText>
          </BakaText>
        </div>
        <BakaButton variant={["icon"]}>
          <BakaIcon>more_vert</BakaIcon>
        </BakaButton>
      </div>
      <div>
        <img
          src="/media.png"
          alt="media"
          width={720}
          height={376}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignSelf: "stretch",
          flexDirection: "column",
          gap: 32,
          padding: 16,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <BakaText variant={"body-large"}>Title</BakaText>
          <BakaText variant={"body-medium"}>Subhead</BakaText>
        </div>
        <BakaText variant={"body-medium"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </BakaText>
        <div style={{ display: "flex", alignSelf: "stretch", justifyContent: "flex-end", gap: 8 }}>
          <BakaButton variant={["outlined"]}>Enabled</BakaButton>
          <BakaButton variant={["filled"]}>Enabled</BakaButton>
        </div>
      </div>
    </BakaCard>
  );
}
