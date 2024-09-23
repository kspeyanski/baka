import { Bar, Button, Icon, Text } from "baka-material-you";

export default async function Demo() {
  return (
    <>
      <Bar style={{ width: 404 }} variant="top">
        <Button variant={"icon"}>
          <Icon>menu</Icon>
        </Button>
        <Text variant="title-large" style={{ flexGrow: 1, textAlign: "center" }}>
          Product
        </Text>
        <Button variant={"icon"}>
          <Icon variant={"filled"}>account_circle</Icon>
        </Button>
      </Bar>
    </>
  );
}
