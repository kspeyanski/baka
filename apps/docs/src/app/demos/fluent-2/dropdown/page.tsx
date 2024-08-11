import { BakaDialog, BakaIcon, BakaList, BakaListItem, BakaMenu, BakaMenuItem, BakaText, BakaTextField } from "baka-ui";

export default function DropdownDemo() {
  return (
    <div className="flex gap-4 flex-row">
      {["outline", "transparent", "filled-lighter", "filled-darker"].map((variant) => (
        <div key={variant} className="flex gap-5 flex-col">
          <BakaTextField style={{ width: 300 }} as="button" variant={variant}>
            <BakaText variant={"placeholder"}>Placeholder text</BakaText>
            <BakaIcon></BakaIcon>
          </BakaTextField>

          <div>
            <BakaTextField style={{ width: 300 }} as="button" variant={variant}>
              <BakaText variant={"placeholder"}>Placeholder text</BakaText>
              <BakaIcon></BakaIcon>
            </BakaTextField>
            <BakaMenu>
              <BakaMenuItem readOnly>
                <BakaText variant={"caption-1-strong"}>Action</BakaText>
              </BakaMenuItem>
              <BakaMenuItem>
                <BakaIcon />
                <BakaText>Action</BakaText>
              </BakaMenuItem>
              <BakaMenuItem>
                <BakaIcon />
                <BakaText>Action</BakaText>
              </BakaMenuItem>
              <BakaMenuItem>
                <BakaIcon />
                <BakaText>Action</BakaText>
              </BakaMenuItem>
              <BakaMenuItem>
                <BakaIcon />
                <BakaText>Action</BakaText>
              </BakaMenuItem>
            </BakaMenu>
          </div>
        </div>
      ))}
    </div>
  );
}
