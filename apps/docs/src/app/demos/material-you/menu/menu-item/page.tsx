import { Icon, Menu, MenuItem, Text } from "baka-material-you";

export default function MenuItemDemo() {
  return (
    <Menu style={{ width: 360 }}>
      <MenuItem>
        <Icon>cut</Icon>
        <Text>Menu item</Text>
        <Icon>chevron_right</Icon>
      </MenuItem>
    </Menu>
  );
}
