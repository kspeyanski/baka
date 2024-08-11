import { BakaDialog, BakaIcon, BakaList, BakaListItem, BakaMenu, BakaText, BakaTextField } from "baka-ui";

export default function DropdownDemo() {
  return (
    <>
      <BakaTextField style={{ width: 300 }} as="button">
        <BakaText variant={"placeholder"}>Placeholder text</BakaText>
        <BakaIcon></BakaIcon>
      </BakaTextField>
      <BakaMenu>
        <BakaMenu>test</BakaMenu>
      </BakaMenu>
    </>
  );
}
