import { Button, Bar, Icon, Text } from "baka-material-you";

export default async function Demo() {
  return (
    <Bar style={{ width: 404 }} variant={["top", "large"]}>
      <div style={{ display: "flex", flex: 1 }}>
        <div style={{ flex: 1 }}>
          <Button variant={"icon"}>
            <Icon>arrow_back</Icon>
          </Button>
        </div>
        <Button variant={"icon"}>
          <Icon>attach_file</Icon>
        </Button>
        <Button variant={"icon"}>
          <Icon>today</Icon>
        </Button>
        <Button variant={"icon"}>
          <Icon>more_vert</Icon>
        </Button>
      </div>
      <div style={{ paddingInline: 16 }}>
        <Text variant="title-large" style={{ flexGrow: 1, textAlign: "left" }}>
          Title
        </Text>
      </div>
    </Bar>
  );
}
