import { BakaAvatar, BakaIcon } from "baka-ui";

export default async function Demo() {
  return (
    <>
      <BakaAvatar>
        <BakaIcon as="img" src="/avatar.svg" />
      </BakaAvatar>
    </>
  );
}
