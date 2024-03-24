import { BakaCard, BakaAvatar, BakaText } from "baka-ui";

export default async function Demo() {
  return (
    <BakaCard variant={"horizontal"} style={{ width: 360 }}>
      <div style={{ display: "flex", flexGrow: 1, gap: 16, padding: 16, alignItems: "center" }}>
        <BakaAvatar>
          <span>A</span>
        </BakaAvatar>
        <div style={{ display: "flex", flexGrow: 1, flexDirection: "column", gap: 4 }}>
          <BakaText variant="title-medium">Header</BakaText>
          <BakaText variant="body-medium">Subhead</BakaText>
        </div>
      </div>

      <img src="/media-small.png" alt="media" width={80} height={80} />
    </BakaCard>
  );
}
