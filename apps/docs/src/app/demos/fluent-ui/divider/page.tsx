import { Icon, Text } from "baka-fluent-ui";
import { Divider } from "baka-fluent-ui";

export default function DividerDemo() {
  return (
    <div>
      <div className="flex flex-col gap-3" style={{ width: 300 }}>
        <Divider />
        <div className="flex items-center gap-3">
          <Divider />
          <Text variant={"caption-1"}>Content</Text>
          <Divider />
        </div>
        <div className="flex items-center gap-3">
          <Divider />
          <Icon></Icon>
          <Divider />
        </div>
        <div className="flex items-center gap-3">
          <Divider style={{ width: 8 }} />
          <Text variant={"caption-1"}>Content</Text>
          <Divider />
        </div>
        <div className="flex items-center gap-3">
          <Divider style={{ width: 8 }} />
          <Icon></Icon>
          <Divider />
        </div>
        <div className="flex items-center gap-3">
          <Divider />
          <Text variant={"caption-1"}>Content</Text>
          <Divider style={{ width: 8 }} />
        </div>
        <div className="flex items-center gap-3">
          <Divider />
          <Icon></Icon>
          <Divider style={{ width: 8 }} />
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-col gap-3" style={{ width: 300 }}>
        <Divider variant={"subtle"} />
        <div className="flex items-center gap-3">
          <Divider variant={"subtle"} />
          <Text variant={"caption-1"}>Content</Text>
          <Divider variant={"subtle"} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"subtle"} />
          <Icon></Icon>
          <Divider variant={"subtle"} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"subtle"} style={{ width: 8 }} />
          <Text variant={"caption-1"}>Content</Text>
          <Divider variant={"subtle"} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"subtle"} style={{ width: 8 }} />
          <Icon></Icon>
          <Divider variant={"subtle"} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"subtle"} />
          <Text variant={"caption-1"}>Content</Text>
          <Divider variant={"subtle"} style={{ width: 8 }} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"subtle"} />
          <Icon></Icon>
          <Divider variant={"subtle"} style={{ width: 8 }} />
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-col gap-3" style={{ width: 300 }}>
        <Divider variant={"strong"} />
        <div className="flex items-center gap-3">
          <Divider variant={"strong"} />
          <Text variant={"caption-1"}>Content</Text>
          <Divider variant={"strong"} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"strong"} />
          <Icon></Icon>
          <Divider variant={"strong"} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"strong"} style={{ width: 8 }} />
          <Text variant={"caption-1"}>Content</Text>
          <Divider variant={"strong"} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"strong"} style={{ width: 8 }} />
          <Icon></Icon>
          <Divider variant={"strong"} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"strong"} />
          <Text variant={"caption-1"}>Content</Text>
          <Divider variant={"strong"} style={{ width: 8 }} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"strong"} />
          <Icon></Icon>
          <Divider variant={"strong"} style={{ width: 8 }} />
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-col gap-3" style={{ width: 300 }}>
        <Divider variant={"brand"} />
        <div className="flex items-center gap-3">
          <Divider variant={"brand"} />
          <Text variant={"caption-1"}>Content</Text>
          <Divider variant={"brand"} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"brand"} />
          <Icon></Icon>
          <Divider variant={"brand"} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"brand"} style={{ width: 8 }} />
          <Text variant={"caption-1"}>Content</Text>
          <Divider variant={"brand"} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"brand"} style={{ width: 8 }} />
          <Icon></Icon>
          <Divider variant={"brand"} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"brand"} />
          <Text variant={"caption-1"}>Content</Text>
          <Divider variant={"brand"} style={{ width: 8 }} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"brand"} />
          <Icon></Icon>
          <Divider variant={"brand"} style={{ width: 8 }} />
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-col gap-3" style={{ width: 300 }}>
        <Divider variant={"inset"} />
        <div className="flex items-center gap-3">
          <Divider variant={"inset"} />
          <Text variant={"caption-1"}>Content</Text>
          <Divider variant={"inset"} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"inset"} />
          <Icon></Icon>
          <Divider variant={"inset"} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"inset"} style={{ width: 8 }} />
          <Text variant={"caption-1"}>Content</Text>
          <Divider variant={"inset"} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"inset"} style={{ width: 8 }} />
          <Icon></Icon>
          <Divider variant={"inset"} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"inset"} />
          <Text variant={"caption-1"}>Content</Text>
          <Divider variant={"inset"} style={{ width: 8 }} />
        </div>
        <div className="flex items-center gap-3">
          <Divider variant={"inset"} />
          <Icon></Icon>
          <Divider variant={"inset"} style={{ width: 8 }} />
        </div>
      </div>
    </div>
  );
}
