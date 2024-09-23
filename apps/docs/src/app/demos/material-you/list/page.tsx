import { Avatar, Checkbox, List, ListItem, Text } from "baka-material-you";

export default async function ListDemo() {
  return (
    <div className="container-low">
      <List style={{ width: 360 }}>
        {Array.from({ length: 5 }, (_, i) => (
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
