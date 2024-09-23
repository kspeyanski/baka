import {
  Badge,
  Navigation,
  NavigationItem,
  Icon,
  Text,
} from "baka-material-you";

export default async function Demo() {
  return (
    <Navigation style={{ width: 409 }} variant="bottom">
      <NavigationItem state={{ selected: true }}>
        <Icon variant={"filled"}>fiber_manual_record</Icon>
      </NavigationItem>
      <NavigationItem>
        <Icon variant={"filled"}>fiber_manual_record</Icon>
      </NavigationItem>

      <NavigationItem>
        <Icon variant={"filled"}>
          fiber_manual_record
          <Badge
            variant={"small"}
            style={{ position: "absolute", right: 16, top: 2 }}
          />
        </Icon>
      </NavigationItem>
    </Navigation>
  );
}
