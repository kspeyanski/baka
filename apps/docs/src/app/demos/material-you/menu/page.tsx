import { Menu, MenuItem, Text } from "baka-material-you";

export default function MenuDemo() {
  return (
    <Menu style={{ width: 360 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <MenuItem key={i}>
          <Text>Menu item</Text>
        </MenuItem>
      ))}
    </Menu>
  );
}
