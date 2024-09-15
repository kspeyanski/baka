import { Tab, TabList, Button, Icon } from "baka-fluent-ui";

export default function TabsDemo() {
  return (
    <div className="flex flex-col gap-8">
      <TabList>
        <Tab state={{ selected: true }}>First tab</Tab>
        <Tab>Second tab</Tab>
        <Tab>Third tab</Tab>
        <Tab>Fourth tab</Tab>
        <Tab>Fifth tab</Tab>
        <Button variant={["icon", "subtle"]}>
          <Icon></Icon>
        </Button>
      </TabList>
      <TabList>
        <Tab state={{ selected: true }}>
          <Icon></Icon>
        </Tab>
        <Tab>
          <Icon></Icon>
        </Tab>
        <Tab>
          <Icon></Icon>
        </Tab>
        <Tab>
          <Icon></Icon>
        </Tab>
        <Tab>
          <Icon></Icon>
        </Tab>
        <Button variant={["icon", "subtle"]}>
          <Icon></Icon>
        </Button>
      </TabList>
      <TabList variant={"vertical"}>
        <Tab state={{ selected: true }}>
          <Icon></Icon>
        </Tab>
        <Tab>
          <Icon></Icon>
        </Tab>
        <Tab>
          <Icon></Icon>
        </Tab>
        <Tab>
          <Icon></Icon>
        </Tab>
        <Tab>
          <Icon></Icon>
        </Tab>
        <Button variant={["icon", "subtle"]}>
          <Icon></Icon>
        </Button>
      </TabList>
      <TabList>
        <Tab>
          <Icon></Icon>Text
        </Tab>
        <Tab state={{ hover: true }}>
          <Icon></Icon>Text
        </Tab>
        <Tab state={{ pressed: true }}>
          <Icon></Icon>Text
        </Tab>
        <Tab state={{ focus: true }}>
          <Icon></Icon>Text
        </Tab>
        <Tab state={{ disabled: true }}>
          <Icon></Icon>Text
        </Tab>
      </TabList>
      <TabList>
        <Tab variant="subtle">
          <Icon></Icon>Text
        </Tab>
        <Tab variant="subtle" state={{ hover: true }}>
          <Icon></Icon>Text
        </Tab>
        <Tab variant="subtle" state={{ pressed: true }}>
          <Icon></Icon>Text
        </Tab>
        <Tab variant="subtle" state={{ focus: true }}>
          <Icon></Icon>Text
        </Tab>
        <Tab variant="subtle" state={{ disabled: true }}>
          <Icon></Icon>Text
        </Tab>
      </TabList>
      <br />
      <TabList>
        <Tab state={{ selected: true }}>
          <Icon></Icon>Text
        </Tab>
        <Tab state={{ selected: true, hover: true }}>
          <Icon></Icon>Text
        </Tab>
        <Tab state={{ selected: true, pressed: true }}>
          <Icon></Icon>Text
        </Tab>
        <Tab state={{ selected: true, focus: true }}>
          <Icon></Icon>Text
        </Tab>
        <Tab state={{ selected: true, disabled: true }}>
          <Icon></Icon>Text
        </Tab>
      </TabList>
      <TabList>
        <Tab variant="subtle" state={{ selected: true }}>
          <Icon></Icon>Text
        </Tab>
        <Tab variant="subtle" state={{ selected: true, hover: true }}>
          <Icon></Icon>Text
        </Tab>
        <Tab variant="subtle" state={{ selected: true, pressed: true }}>
          <Icon></Icon>Text
        </Tab>
        <Tab variant="subtle" state={{ selected: true, focus: true }}>
          <Icon></Icon>Text
        </Tab>
        <Tab variant="subtle" state={{ selected: true, disabled: true }}>
          <Icon></Icon>Text
        </Tab>
      </TabList>
    </div>
  );
}
