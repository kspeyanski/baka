import {
  Card,
  Code,
  Divider,
  Icon,
  Pre,
  Tab,
  TabGroup,
  Text,
} from "@material-you/components";
import { DemoSource } from "../../../shared/demo/demo-source.server";
import { DemoState } from "@shared/demo/demo-state.client";
import { DemoTabClient } from "@shared/demo/demo-tab.client";
import { DemoIFrame } from "../../../shared/demo/demo-iframe";

export type DemoProps = {
  src: string;
  style?: React.CSSProperties;
};

export const Demo = (props: DemoProps) => {
  return (
    <Card className="my-4" style={props.style}>
      <DemoState>
        <TabGroup
          className="bg-surface-container"
          variant={["secondary", "overflow"]}
        >
          <DemoTabClient value="demo">
            <Tab>
              <Icon>terminal</Icon>
              <Text as="label">Demo</Text>
            </Tab>
          </DemoTabClient>
          <DemoTabClient value="source">
            <Tab>
              <Icon>code</Icon>
              <Text as="label">Source</Text>
            </Tab>
          </DemoTabClient>
        </TabGroup>
        <Divider />
        <DemoIFrame
          src={props.src}
          style={{ minHeight: props.style?.height }}
        />
        <DemoSource src={props.src} Pre={Pre} Code={Code} />
      </DemoState>
    </Card>
  );
};
