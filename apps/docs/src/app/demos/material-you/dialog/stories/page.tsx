import {
  Dialog,
  Icon,
  Text,
  ListItem,
  Avatar,
  Checkbox,
  Button,
  DialogProps,
} from "baka-material-you";

export type DialogStoryProps = DialogProps & {
  icon?: boolean;
  menu?: boolean;
  items?: boolean;
  itemsCount?: number;
  scrollable?: boolean;
};

export const defaultProps: DialogStoryProps = {
  variant: "basic",
  icon: false,
  items: true,
  itemsCount: 3,
};

export default function DialogStory(props: DialogStoryProps) {
  const args = { ...defaultProps, ...props };

  return (
    <Dialog style={{ width: 320 }} variant={args.variant}>
      <div style={{ display: "flex", gap: 16, flexDirection: "column" }}>
        {args.icon && <Icon style={{ justifyContent: "center" }}>mobile_friendly</Icon>}
        <Text
          style={{ display: "flex", justifyContent: args.icon ? "center" : "flex-start" }}
          variant={"headline-small"}
        >
          Dialog Title
        </Text>
        <Text variant={"body-medium"}>
          A dialog is a type of modal window that appears in front of app content to provide
          critical information, or prompt for a decision to be made.
        </Text>
      </div>
      {args.items && (
        <ul
          style={{
            background: "none",
            padding: 0,
            margin: 0,
            width: "calc(100% + 48px)",
            marginInline: "-24px",
            maxHeight: 200,
            overflow: "auto",
          }}
        >
          {new Array(args.itemsCount ?? 0).fill(null).map((_, index) => (
            <ListItem key={index}>
              <Avatar>A</Avatar>
              <Text style={{ flexGrow: 1 }} variant={"body-large"}>
                List item
              </Text>
              <Text>100+</Text>
              <Checkbox readOnly={true} />
            </ListItem>
          ))}
        </ul>
      )}
      <div style={{ display: "flex", gap: 8, width: "100%", justifyContent: "flex-end" }}>
        <Button variant={["text"]}>Action 2</Button>
        <Button variant={["text"]}>Action 1</Button>
      </div>
    </Dialog>
  );
}
