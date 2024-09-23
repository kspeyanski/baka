import { Icon, Tab, TabGroup, Text } from "baka-material-you";

export default function TabsDemos() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto",
        gap: 16,
        border: "1px dotted #000",
      }}
    >
      <TabGroup variant={["primary"]} style={{ width: 360 }}>
        <Tab state={{ selected: true }}>
          <Text>Tab 1</Text>
        </Tab>
        <Tab>
          <Text>Tab 2</Text>
        </Tab>
        <Tab>
          <Text>Tab 3</Text>
        </Tab>
        <Tab>
          <Text>Tab 4</Text>
        </Tab>
        <Tab>
          <Text>Tab 5</Text>
        </Tab>
      </TabGroup>
      <TabGroup variant={["primary"]} style={{ width: 360 }}>
        <Tab state={{ selected: true }}>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
          <Text>Tab 1</Text>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
          <Text>Tab 2</Text>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
          <Text>Tab 3</Text>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
          <Text>Tab 4</Text>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
          <Text>Tab 5</Text>
        </Tab>
      </TabGroup>
      <TabGroup variant={["primary"]} style={{ width: 360 }}>
        <Tab state={{ selected: true }}>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
      </TabGroup>
      <br />
      <TabGroup variant={"secondary"} style={{ width: 360 }}>
        <Tab state={{ selected: true }}>
          <Text>Tab 1</Text>
        </Tab>
        <Tab>
          <Text>Tab 2</Text>
        </Tab>
        <Tab>
          <Text>Tab 3</Text>
        </Tab>
        <Tab>
          <Text>Tab 4</Text>
        </Tab>
        <Tab>
          <Text>Tab 5</Text>
        </Tab>
      </TabGroup>
      <TabGroup variant={"secondary"} style={{ width: 360 }}>
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
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
          <Text>Tab</Text>
        </Tab>
      </TabGroup>
      <TabGroup variant={"secondary"} style={{ width: 360 }}>
        <Tab state={{ selected: true }}>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
      </TabGroup>
      <br />
      <TabGroup variant={["primary", "overflow"]} style={{ width: 310 }}>
        <Tab state={{ selected: true }}>
          <Text>Tab 1</Text>
        </Tab>
        <Tab>
          <Text>Tab 2</Text>
        </Tab>
        <Tab>
          <Text>Tab 3</Text>
        </Tab>
      </TabGroup>
      <TabGroup variant={["primary", "overflow"]} style={{ width: 310 }}>
        <Tab state={{ selected: true }}>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
          <Text>Tab 1</Text>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
          <Text>Tab 2</Text>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
          <Text>Tab 3</Text>
        </Tab>
      </TabGroup>
      <TabGroup variant={["primary", "overflow"]} style={{ width: 310 }}>
        <Tab state={{ selected: true }}>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
      </TabGroup>
      <br />
      <TabGroup variant={["secondary", "overflow"]} style={{ width: 310 }}>
        <Tab state={{ selected: true }}>
          <Text>Tab 1</Text>
        </Tab>
        <Tab>
          <Text>Tab 2</Text>
        </Tab>
        <Tab>
          <Text>Tab 3</Text>
        </Tab>
      </TabGroup>
      <TabGroup variant={["secondary", "overflow"]} style={{ width: 310 }}>
        <Tab state={{ selected: true }}>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
          <Text>Tab 1</Text>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
          <Text>Tab 2</Text>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
          <Text>Tab 3</Text>
        </Tab>
      </TabGroup>
      <TabGroup variant={["secondary", "overflow"]} style={{ width: 310 }}>
        <Tab state={{ selected: true }}>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
      </TabGroup>
    </div>
  );
}
