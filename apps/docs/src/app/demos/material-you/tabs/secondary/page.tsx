import { Icon, Tab, TabGroup, Text } from "baka-material-you";

export default function TabsDemos() {
  return (
    <TabGroup variant={["secondary"]}>
      <Tab state={{ selected: true }}>
        <Icon variant={"filled"}>fiber_manual_record</Icon>
        <Text>Tab</Text>
      </Tab>
      <Tab>
        <Icon variant={"filled"}>fiber_manual_record</Icon>
        <Text>Tab</Text>
      </Tab>
      <Tab>
        <Icon variant={"filled"}>fiber_manual_record</Icon>
        <Text>Tab</Text>
      </Tab>
    </TabGroup>
  );
}
