import {
  Avatar,
  Button,
  Checkbox,
  Dialog,
  Icon,
  ListItem,
  Text,
} from "baka-material-you";

export default function DialogDemo() {
  return (
    <Dialog style={{ width: 320 }}>
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
      <ul
        style={{
          background: "none",
          padding: 0,
          margin: 0,
          width: "calc(100% + 48px)",
          marginInline: "-24px",
        }}
      >
        <ListItem>
          <Avatar>A</Avatar>
          <Text style={{ flexGrow: 1 }} variant={"body-large"}>
            List item
          </Text>
          <Text>100+</Text>
          <Checkbox readOnly={true} />
        </ListItem>
        <ListItem>
          <Avatar>A</Avatar>
          <Text style={{ flexGrow: 1 }} variant={"body-large"}>
            List item
          </Text>
          <Text>100+</Text>
          <Checkbox readOnly={true} checked={true} />
        </ListItem>
        <ListItem>
          <Avatar>A</Avatar>
          <Text style={{ flexGrow: 1 }} variant={"body-large"}>
            List item
          </Text>
          <Text>100+</Text>
          <Checkbox readOnly={true} checked={true} />
        </ListItem>
      </ul>
      <div style={{ display: "flex", gap: 8, width: "100%", justifyContent: "flex-end" }}>
        <Button variant={["text"]}>Action 2</Button>
        <Button variant={["text"]}>Action 1</Button>
      </div>
    </Dialog>
  );
}
