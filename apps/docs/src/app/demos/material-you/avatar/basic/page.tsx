import { BakaAvatar, BakaIcon } from "baka-ui";

export default async function Demo() {
  return (
    <>
      <BakaAvatar>A</BakaAvatar>
      <br />
      <br />
      <BakaAvatar>
        <BakaIcon>check</BakaIcon>
      </BakaAvatar>
      <br />
      <br />
      <BakaAvatar>
        <BakaIcon as="img" src="/avatar.svg" />
      </BakaAvatar>
    </>
  );
}
