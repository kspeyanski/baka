import { BakaDivider, BakaIcon, BakaMenu, BakaMenuItem, BakaText } from "baka-ui";

export default function MenuDemo() {
  return (
    <BakaMenu style={{ width: 248 }}>
      <BakaMenuItem readOnly>
        <BakaText variant={["caption-1-strong", "subtle"]}>Section header</BakaText>
      </BakaMenuItem>
      <BakaMenuItem>
        <BakaIcon></BakaIcon>
        <BakaText>Action</BakaText>
        <div className="flex items-center">
          <BakaText variant={["body-1", "subtle"]}>Shortcut text</BakaText>
          <BakaIcon></BakaIcon>
        </div>
      </BakaMenuItem>
      <BakaMenuItem>
        <BakaIcon></BakaIcon>
        <BakaText>Action</BakaText>
        <div className="flex items-center">
          <BakaText variant={["body-1", "subtle"]}>Shortcut text</BakaText>
          <BakaIcon></BakaIcon>
        </div>
      </BakaMenuItem>
      <BakaMenuItem>
        <BakaIcon></BakaIcon>
        <BakaText>Action</BakaText>
        <div className="flex items-center">
          <BakaText variant={["body-1", "subtle"]}>Shortcut text</BakaText>
          <BakaIcon></BakaIcon>
        </div>
      </BakaMenuItem>
      <BakaDivider />
      <BakaMenuItem readOnly>
        <BakaText variant={["caption-1-strong", "subtle"]}>Section header</BakaText>
      </BakaMenuItem>
      <BakaMenuItem>
        <BakaIcon></BakaIcon>
        <BakaText>Action</BakaText>
        <div className="flex items-center">
          <BakaText variant={["body-1", "subtle"]}>Shortcut text</BakaText>
          <BakaIcon></BakaIcon>
        </div>
      </BakaMenuItem>
      <BakaMenuItem>
        <BakaIcon></BakaIcon>
        <BakaText>Action</BakaText>
        <div className="flex items-center">
          <BakaText variant={["body-1", "subtle"]}>Shortcut text</BakaText>
          <BakaIcon></BakaIcon>
        </div>
      </BakaMenuItem>
      <BakaMenuItem>
        <BakaIcon></BakaIcon>
        <BakaText>Action</BakaText>
        <div className="flex items-center">
          <BakaText variant={["body-1", "subtle"]}>Shortcut text</BakaText>
          <BakaIcon></BakaIcon>
        </div>
      </BakaMenuItem>
      <BakaMenuItem disabled>
        <BakaIcon></BakaIcon>
        <BakaText>Action</BakaText>
        <div className="flex items-center">
          <BakaText variant={["body-1", "subtle"]}>Shortcut text</BakaText>
          <BakaIcon></BakaIcon>
        </div>
      </BakaMenuItem>
    </BakaMenu>
  );
}
