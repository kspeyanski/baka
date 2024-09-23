import { Button, Dialog, Icon, Text } from "baka-material-you";

export default function DialogDemo() {
  return (
    <Dialog style={{ width: 320 }} variant={"full-screen"}>
      <div style={{ display: "flex", gap: 16, flexDirection: "column" }}>
        <Icon style={{ justifyContent: "center" }}>mobile_friendly</Icon>
        <Text style={{ display: "flex", justifyContent: "center" }} variant={"headline-small"}>
          Dialog Title
        </Text>
        <Text variant={"body-medium"}>
          A dialog is a type of modal window that appears in front of app content to provide
          critical information, or prompt for a decision to be made.
        </Text>
      </div>
      <div style={{ display: "flex", gap: 8, width: "100%", justifyContent: "flex-end" }}>
        <Button variant={["text"]}>Action 2</Button>
        <Button variant={["text"]}>Action 1</Button>
      </div>
    </Dialog>
  );
}
