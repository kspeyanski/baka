import { BakaButton, BakaIcon, BakaInput, BakaText, BakaTextField } from "baka-ui";

export default async function App() {
  const args = {};
  return (
    <BakaTextField style={{ width: 300 }}>
      <BakaIcon>search</BakaIcon>
      <BakaText>BakaText</BakaText>
      <BakaInput defaultValue="Placeholder" />
      <BakaButton variant={["icon"]}>
        <BakaIcon variant={["filled", "error"]}>error</BakaIcon>
      </BakaButton>
    </BakaTextField>
  );
}
