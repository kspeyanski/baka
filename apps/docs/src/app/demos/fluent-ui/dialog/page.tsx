import { Text } from "baka-fluent-ui";
import { Button, Dialog, Icon } from "baka-fluent-ui";

export default async function DialogDemo() {
  return (
    <div className="flex align-center justify-center">
      <Dialog style={{ width: 600 }}>
        <div className="flex flex-col p-6 gap-2">
          <div className="flex justify-between align-center">
            <Text as="h2" variant={"subtitle-1"}>
              Delete work items
            </Text>
            <Button variant={["icon", "transparent"]}>
              <Icon variant={"size-20"}></Icon>
            </Button>
          </div>
          <div className="flex align-center py-1.5">
            <Text as="p" variant={"body-1"}>
              Are you sure you want to delete the selected work items? You can
              restore deleted work items from the Recycle Bin.
            </Text>
          </div>
          <div className="flex align-center justify-end">
            <div className="flex gap-2">
              <Button variant={["primary"]}>Delete</Button>
              <Button variant={["secondary"]}>Cancel</Button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
