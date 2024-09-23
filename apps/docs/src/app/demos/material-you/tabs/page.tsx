import { Icon, Tab, TabGroup, Text } from "baka-material-you";

export default function TabsDemos() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto",
        columnGap: 16,
        rowGap: 32,
        maxWidth: 630,
      }}
    >
      <TabGroup variant={["primary"]}>
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
    </div>
  );
}
