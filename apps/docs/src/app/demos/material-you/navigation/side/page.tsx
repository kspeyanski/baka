import {
  Navigation,
  NavigationItem,
  Icon,
  Text,
  Divider,
} from "baka-material-you";

export default async function SideNavigationDemo() {
  return (
    <Navigation style={{ width: 328 }} variant={"side"}>
      <div style={{ padding: "18px 16px" }}>
        <Text variant={"title-small"}>Title</Text>
      </div>
      <div style={{ padding: "18px 16px" }}>
        <Text variant={"title-small"}>Section header</Text>
      </div>
      <NavigationItem state={{ selected: true }}>
        <Icon variant={"filled"}>fiber_manual_record</Icon>
        <Text>Label</Text>
        <Text>100+</Text>
      </NavigationItem>
      <NavigationItem>
        <Icon variant={"filled"}>fiber_manual_record</Icon>
        <Text>Label</Text>
        <Text>100+</Text>
      </NavigationItem>
      <NavigationItem>
        <Icon variant={"filled"}>fiber_manual_record</Icon>
        <Text>Label</Text>
        <Text>100+</Text>
      </NavigationItem>
      <Divider />
      <div style={{ padding: "18px 16px" }}>
        <Text variant={"title-small"}>Section header</Text>
      </div>
      <NavigationItem>
        <Icon variant={"filled"}>fiber_manual_record</Icon>
        <Text>Label</Text>
      </NavigationItem>
      <NavigationItem>
        <Icon variant={"filled"}>fiber_manual_record</Icon>
        <Text>Label</Text>
      </NavigationItem>
      <NavigationItem>
        <Icon variant={"filled"}>fiber_manual_record</Icon>
        <Text>Label</Text>
      </NavigationItem>
    </Navigation>
  );
}
