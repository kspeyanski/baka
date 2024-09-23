import { Avatar, Icon } from "baka-material-you";

export default async function Demo() {
  return (
    <>
      <Avatar>A</Avatar>
      <br />
      <br />
      <Avatar>
        <Icon>check</Icon>
      </Avatar>
      <br />
      <br />
      <Avatar>
        <Icon as="img" src="/avatar.svg" />
      </Avatar>
    </>
  );
}
