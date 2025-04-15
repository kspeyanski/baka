import { CalendarFilled, CalendarRegular } from "@fluentui/react-icons";
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
          <Icon as={CalendarRegular} />
        </Button>
      </TabList>
      <TabList>
        <Tab state={{ selected: true }}>
          <Icon as={CalendarFilled} />
        </Tab>
        <Tab>
          <Icon as={CalendarRegular} />
        </Tab>
        <Tab>
          <Icon as={CalendarRegular} />
        </Tab>
        <Tab>
          <Icon as={CalendarRegular} />
        </Tab>
        <Tab>
          <Icon as={CalendarRegular} />
        </Tab>
        <Button variant={["icon", "subtle"]}>
          <Icon as={CalendarRegular} />
        </Button>
      </TabList>
      <TabList variant={"vertical"}>
        <Tab state={{ selected: true }}>
          <Icon as={CalendarFilled} />
        </Tab>
        <Tab>
          <Icon as={CalendarRegular} />
        </Tab>
        <Tab>
          <Icon as={CalendarRegular} />
        </Tab>
        <Tab>
          <Icon as={CalendarRegular} />
        </Tab>
        <Tab>
          <Icon as={CalendarRegular} />
        </Tab>
        <Button variant={["icon", "subtle"]}>
          <Icon as={CalendarRegular} />
        </Button>
      </TabList>
      <TabList>
        <Tab>
          <Icon as={CalendarRegular} />
          Text
        </Tab>
        <Tab state={{ hover: true }}>
          <Icon as={CalendarRegular} />
          Text
        </Tab>
        <Tab state={{ pressed: true }}>
          <Icon as={CalendarRegular} />
          Text
        </Tab>
        <Tab state={{ focus: true }}>
          <Icon as={CalendarRegular} />
          Text
        </Tab>
        <Tab state={{ disabled: true }}>
          <Icon as={CalendarRegular} />
          Text
        </Tab>
      </TabList>
      <TabList>
        <Tab variant="subtle">
          <Icon as={CalendarRegular} />
          Text
        </Tab>
        <Tab variant="subtle" state={{ hover: true }}>
          <Icon as={CalendarRegular} />
          Text
        </Tab>
        <Tab variant="subtle" state={{ pressed: true }}>
          <Icon as={CalendarRegular} />
          Text
        </Tab>
        <Tab variant="subtle" state={{ focus: true }}>
          <Icon as={CalendarRegular} />
          Text
        </Tab>
        <Tab variant="subtle" state={{ disabled: true }}>
          <Icon as={CalendarRegular} />
          Text
        </Tab>
      </TabList>
      <br />
      <TabList>
        <Tab state={{ selected: true }}>
          <Icon as={CalendarFilled} />
          Text
        </Tab>
        <Tab state={{ selected: true, hover: true }}>
          <Icon as={CalendarFilled} />
          Text
        </Tab>
        <Tab state={{ selected: true, pressed: true }}>
          <Icon as={CalendarFilled} />
          Text
        </Tab>
        <Tab state={{ selected: true, focus: true }}>
          <Icon as={CalendarFilled} />
          Text
        </Tab>
        <Tab state={{ selected: true, disabled: true }}>
          <Icon as={CalendarFilled} />
          Text
        </Tab>
      </TabList>
      <TabList>
        <Tab variant="subtle" state={{ selected: true }}>
          <Icon as={CalendarFilled} />
          Text
        </Tab>
        <Tab variant="subtle" state={{ selected: true, hover: true }}>
          <Icon as={CalendarFilled} />
          Text
        </Tab>
        <Tab variant="subtle" state={{ selected: true, pressed: true }}>
          <Icon as={CalendarFilled} />
          Text
        </Tab>
        <Tab variant="subtle" state={{ selected: true, focus: true }}>
          <Icon as={CalendarFilled} />
          Text
        </Tab>
        <Tab variant="subtle" state={{ selected: true, disabled: true }}>
          <Icon as={CalendarFilled} />
          Text
        </Tab>
      </TabList>
    </div>
  );
}
