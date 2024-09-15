import { Text } from "baka-fluent-ui";
import { Divider, Icon, Menu, MenuItem } from "baka-fluent-ui";

export default function MenuDemo() {
  return (
    <Menu style={{ width: 248 }}>
      <MenuItem state={{ readonly: true }}>
        <Text variant={["caption-1-strong", "subtle"]}>
          Section header
        </Text>
      </MenuItem>
      <MenuItem>
        <Icon></Icon>
        <Text>Action</Text>
        <div className="flex items-center">
          <Text variant={["body-1", "subtle"]}>Shortcut text</Text>
          <Icon></Icon>
        </div>
      </MenuItem>
      <MenuItem>
        <Icon></Icon>
        <Text>Action</Text>
        <div className="flex items-center">
          <Text variant={["body-1", "subtle"]}>Shortcut text</Text>
          <Icon></Icon>
        </div>
      </MenuItem>
      <MenuItem>
        <Icon></Icon>
        <Text>Action</Text>
        <div className="flex items-center">
          <Text variant={["body-1", "subtle"]}>Shortcut text</Text>
          <Icon></Icon>
        </div>
      </MenuItem>
      <Divider />
      <MenuItem state={{ readonly: true }}>
        <Text variant={["caption-1-strong", "subtle"]}>
          Section header
        </Text>
      </MenuItem>
      <MenuItem>
        <Icon></Icon>
        <Text>Action</Text>
        <div className="flex items-center">
          <Text variant={["body-1", "subtle"]}>Shortcut text</Text>
          <Icon></Icon>
        </div>
      </MenuItem>
      <MenuItem>
        <Icon></Icon>
        <Text>Action</Text>
        <div className="flex items-center">
          <Text variant={["body-1", "subtle"]}>Shortcut text</Text>
          <Icon></Icon>
        </div>
      </MenuItem>
      <MenuItem>
        <Icon></Icon>
        <Text>Action</Text>
        <div className="flex items-center">
          <Text variant={["body-1", "subtle"]}>Shortcut text</Text>
          <Icon></Icon>
        </div>
      </MenuItem>
      <MenuItem state={{ disabled: true }}>
        <Icon></Icon>
        <Text>Action</Text>
        <div className="flex items-center">
          <Text variant={["body-1", "subtle"]}>Shortcut text</Text>
          <Icon></Icon>
        </div>
      </MenuItem>
    </Menu>
  );
}
