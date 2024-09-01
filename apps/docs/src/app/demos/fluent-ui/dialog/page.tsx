import { BakaButton, BakaDialog, BakaIcon, BakaText } from "baka-ui";

export default async function DialogDemo() {
  return (
    <div className="flex align-center justify-center">
      <BakaDialog style={{ width: 600 }}>
        <div className="flex flex-col p-6 gap-2">
          <div className="flex justify-between align-center">
            <BakaText as="h2" variant={"subtitle-1"}>
              Delete work items
            </BakaText>
            <BakaButton variant={["icon", "transparent"]}>
              <BakaIcon variant={"size-20"}></BakaIcon>
            </BakaButton>
          </div>
          <div className="flex align-center py-1.5">
            <BakaText as="p" variant={"body-1"}>
              Are you sure you want to delete the selected work items? You can restore deleted work items from the
              Recycle Bin.
            </BakaText>
          </div>
          <div className="flex align-center justify-end">
            <div className="flex gap-2">
              <BakaButton variant={["primary"]}>Delete</BakaButton>
              <BakaButton variant={["secondary"]}>Cancel</BakaButton>
            </div>
          </div>
        </div>
      </BakaDialog>
    </div>
  );
}
