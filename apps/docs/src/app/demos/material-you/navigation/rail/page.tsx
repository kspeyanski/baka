import {
  Navigation,
  Button,
  Icon,
  NavigationItem,
  Text,
} from "baka-material-you";

export default function NavigationDemo() {
  return (
    <Navigation style={{ height: "calc(100vh - 100px)" }} variant={"rail"}>
      <div
        style={{
          display: "flex",
          gap: 4,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "stretch",
        }}
      >
        <Button variant="icon">
          <Icon>menu</Icon>
        </Button>
        {
          <Button variant={["fab", "tertiary"]}>
            <Icon>mode_edit</Icon>
          </Button>
        }
      </div>
      <div>
        <NavigationItem state={{ selected: true }}>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
          <Text>Label</Text>
        </NavigationItem>
        <NavigationItem>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </NavigationItem>
        <NavigationItem>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </NavigationItem>
        <NavigationItem>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </NavigationItem>
      </div>
    </Navigation>
  );
}
