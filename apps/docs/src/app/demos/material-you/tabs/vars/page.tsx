import { Icon, Tab, TabGroup, Text } from "baka-material-you";

export default function TabsDemos() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "auto",
        columnGap: 16,
        rowGap: 32,
        maxWidth: 630,
      }}
    >
      <TabGroup variant={["primary"]}>
        <Tab state={{ selected: true }}>
          <Text>Tab</Text>
        </Tab>
        <Tab>
          <Text>Tab</Text>
        </Tab>
        <Tab>
          <Text>Tab</Text>
        </Tab>
      </TabGroup>
      <TabGroup variant={["primary", "overflow"]}>
        <Tab state={{ selected: true }}>
          <Text>Tab</Text>
        </Tab>
        <Tab>
          <Text>Tab</Text>
        </Tab>
        <Tab>
          <Text>Tab</Text>
        </Tab>
        <Tab>
          <Text>Tab</Text>
        </Tab>
        <Tab>
          <Text>Tab</Text>
        </Tab>
      </TabGroup>
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
      <TabGroup variant={["primary", "overflow"]}>
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
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
          <Text>Tab</Text>
        </Tab>
      </TabGroup>
      <TabGroup variant={["primary"]}>
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
      <TabGroup variant={["primary", "overflow"]}>
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
      <TabGroup variant={["secondary", "overflow"]}>
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
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
          <Text>Tab</Text>
        </Tab>
      </TabGroup>
      <TabGroup variant={["secondary"]}>
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
      <TabGroup variant={["secondary", "overflow"]}>
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
      </TabGroup>
      {/*
      <TabGroup variant={["primary"]}>
        <Tab state={{selected: true}}>
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
      <TabGroup variant={"secondary"}>
        <Tab state={{selected: true}}>
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
      <TabGroup variant={"secondary"}>
        <Tab state={{selected: true}}>
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
      <TabGroup variant={"secondary"}>
        <Tab state={{selected: true}}>
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
      <TabGroup variant={["primary", "overflow"]}>
        <Tab state={{selected: true}}>
          <Text>Tab 1</Text>
        </Tab>
        <Tab>
          <Text>Tab 2</Text>
        </Tab>
        <Tab>
          <Text>Tab 3</Text>
        </Tab>
      </TabGroup>
      <TabGroup variant={["primary", "overflow"]}>
        <Tab state={{selected: true}}>
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
      <TabGroup variant={["primary", "overflow"]}>
        <Tab state={{selected: true}}>
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
      <TabGroup variant={["secondary", "overflow"]}>
        <Tab state={{selected: true}}>
          <Text>Tab 1</Text>
        </Tab>
        <Tab>
          <Text>Tab 2</Text>
        </Tab>
        <Tab>
          <Text>Tab 3</Text>
        </Tab>
      </TabGroup>
      <TabGroup variant={["secondary", "overflow"]}>
        <Tab state={{selected: true}}>
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
      <TabGroup variant={["secondary", "overflow"]}>
        <Tab state={{selected: true}}>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
        <Tab>
          <Icon variant={"filled"}>fiber_manual_record</Icon>
        </Tab>
      </TabGroup> */}
    </div>
  );
}
