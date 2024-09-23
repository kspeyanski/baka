import {
  Badge,
  Navigation,
  NavigationItem,
  Icon,
  Text,
} from "baka-material-you";

export default async function Demo() {
  return (
    <Navigation style={{ width: 400 }} variant={"bottom"}>
      <NavigationItem state={{ selected: true }}>
        <Icon variant={"filled"}>fiber_manual_record</Icon>
        {true ? <Text>Text</Text> : null}
      </NavigationItem>
      <NavigationItem>
        <Icon variant={"filled"}>fiber_manual_record</Icon>
        {true ? <Text>Text</Text> : null}
      </NavigationItem>

      <NavigationItem>
        <Icon variant={"filled"}>
          fiber_manual_record
          {true ? (
            <Badge
              variant={"single-digit"}
              style={{ position: "absolute", right: 16, top: 2 }}
            >
              3
            </Badge>
          ) : (
            <Badge
              variant={"small"}
              style={{ position: "absolute", right: 16, top: 2 }}
            />
          )}
        </Icon>
        {true ? <Text>Text</Text> : null}
      </NavigationItem>
    </Navigation>
  );
}
