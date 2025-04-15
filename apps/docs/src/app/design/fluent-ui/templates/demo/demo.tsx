import styles from "./demo.module.scss";

import { Text, Card, Pre, Code } from "@fluent-ui/components";
import { Icon, TabList, Tab } from "baka-fluent-ui";
import { CodeRegular, FolderRegular } from "@fluentui/react-icons";
import { DemoState } from "@shared/demo/demo-state.client";
import { DemoTabClient } from "@shared/demo/demo-tab.client";
import { DemoIFrame } from "@shared/demo/demo-iframe";
import { DemoSource } from "@shared/demo/demo-source.server";

export type DemoProps = {
  src: string;
  style?: React.CSSProperties;
};

export const Demo = (props: DemoProps) => {
  return (
    <Card variant={"outline"} className="my-4 p-0 gap-0" style={props.style}>
      <DemoState>
        <TabList variant={"horizontal"} className={styles.header}>
          <DemoTabClient value="demo">
            <Tab>
              <Icon as={CodeRegular} />
              <Text as="label">Demo</Text>
            </Tab>
          </DemoTabClient>
          <DemoTabClient value="source">
            <Tab>
              <Icon as={FolderRegular} />
              <Text as="label">Source</Text>
            </Tab>
          </DemoTabClient>
        </TabList>
        <DemoIFrame
          src={props.src}
          style={{ minHeight: props.style?.height }}
          className={styles.iframe}
        />
        <DemoSource src={props.src} Pre={Pre} Code={Code} />
      </DemoState>
    </Card>
  );
};
