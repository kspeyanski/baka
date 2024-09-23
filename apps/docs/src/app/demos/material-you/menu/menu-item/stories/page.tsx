import { Icon, Menu, MenuItem, Text } from "baka-material-you";

export type MenuItemStoryProps = {
  prefix: boolean;
  suffix: boolean;
};

export const defaultProps = {
  prefix: true,
  suffix: true,
};

export default function MenuItemStory(props: MenuItemStoryProps) {
  const args = { ...defaultProps, ...props };

  return (
    <Menu style={{ width: 360 }}>
      <MenuItem>
        {args.prefix && <Icon>cut</Icon>}
        <Text>Menu item</Text>
        {args.suffix && <Icon>chevron_right</Icon>}
      </MenuItem>
    </Menu>
  );
}
