import { Accordion, Badge, Icon, Text } from "baka-fluent-ui";

export default function ListDemo() {
  return (
    <div className="background-3">
      <ul style={{ width: 269 }}>
        <Accordion tabIndex={1}>
          <Icon></Icon>
          <Text variant="subtitle-2">Favorites</Text>
          {/* <Badge variant={"subtle"}>15</Badge> */}
        </Accordion>
        <Accordion>
          <Icon></Icon>
          <Icon></Icon>
          <Text>Inbox</Text>
        </Accordion>
        <Accordion>
          <Icon></Icon>
          <Icon></Icon>
          <Text>Sent</Text>
        </Accordion>
        <Accordion>
          <Icon></Icon>
          <Icon></Icon>
          <Text>Draft</Text>
          {/* <Badge variant={"subtle"}>2</Badge> */}
        </Accordion>
        <Accordion tabIndex={1} state={{ focus: true }}>
          <Icon></Icon>
          <Text variant="subtitle-2">colin_ballinger@acme.com</Text>
        </Accordion>
        <Accordion>
          <Icon></Icon>
          <Icon></Icon>
          <Text>Inbox</Text>
          {/* <Badge variant={"subtle"}>29</Badge> */}
        </Accordion>
        <Accordion>
          <Icon></Icon>
          <Icon></Icon>
          <Text>Archive</Text>
        </Accordion>
        <Accordion>
          <Icon></Icon>
          <Icon></Icon>
          <Text>Deleted items</Text>
          {/* <Badge variant={"subtle"}>7</Badge> */}
        </Accordion>
      </ul>
    </div>
  );
}
