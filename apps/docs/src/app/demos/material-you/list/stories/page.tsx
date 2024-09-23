import { Avatar, Checkbox, List, ListItem, ListProps, Text } from "baka-material-you";

export type ListStoryProps = ListProps & {
  scrollable?: boolean;
  items?: number;
};

export const defaultProps = {
  scrollable: true,
  items: 7,
};

export default function ListStory(props: ListStoryProps) {
  const args = { ...defaultProps, ...props };

  return (
    <div className="container-low">
      <List {...args} style={{ width: 360, ...(args.scrollable ? { maxHeight: 300 } : {}) }}>
        {Array.from({ length: args.items }, (_, i) => (
          <ListItem key={i}>
            <Avatar>A</Avatar>
            <Text style={{ flexGrow: 1 }} variant={"body-large"}>
              List item
            </Text>
            <Checkbox readOnly={true} checked={true} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
