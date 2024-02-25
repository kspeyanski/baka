import {
  BakaCard,
  BakaAvatar,
  BakaText,
  BakaLabel,
  BakaButton,
  BakaIcon,
  BakaParagraph,
} from "baka-ui";

export default async function Demo() {
  return (
    <BakaCard variant={"horizontal"} style={{ width: 360 }}>
      <div style={{ display: "flex", flexGrow: 1, gap: 16, padding: 16, alignItems: "center" }}>
        <BakaAvatar>
          <span>A</span>
        </BakaAvatar>
        <div style={{ display: "flex", flexGrow: 1, flexDirection: "column", gap: 4 }}>
          <BakaLabel variant="title-medium">Header</BakaLabel>
          <BakaLabel variant="body-medium">Subhead</BakaLabel>
        </div>
      </div>

      <img src="/media-small.png" alt="media" width={80} height={80} />
    </BakaCard>
  );
}
