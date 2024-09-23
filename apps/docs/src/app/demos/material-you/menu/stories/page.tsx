import { Menu, MenuItem, Text } from "baka-material-you";

export type MenuStoryProps = {
  items: number;
  scrollable: boolean;
};

export const defaultProps = {
  scrollable: true,
  items: 5,
};

export default function MenuStory(props: MenuStoryProps) {
  const args = { ...defaultProps, ...props };

  return (
    <Menu {...args} style={{ width: 360, ...(args.scrollable ? { maxHeight: 300 } : {}) }}>
      {Array.from({ length: args.items }, (_, i) => (
        <MenuItem key={i}>
          <Text>Menu item</Text>
        </MenuItem>
      ))}
    </Menu>
  );
}
