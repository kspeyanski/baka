import "./demo.scss";

import { Text } from "@/components/text";
import { BakaCard, BakaDivider, BakaIcon, BakaTabGroup } from "baka-ui";
import { DemoSource } from "./demo-source";
import { DemoState } from "./demo.state";
import { DemoTabClient } from "./demo-tab.client";
import { DemoIFrame } from "./demo-iframe";

export type DemoProps = {
  src: string;
  style?: React.CSSProperties;
};

export const Demo = (props: DemoProps) => {
  return (
    <BakaCard className="my-4" style={props.style}>
      <DemoState>
        <div className="bg-surface-container">
          <BakaTabGroup variant={"secondary"}>
            <DemoTabClient value="demo">
              <BakaIcon>terminal</BakaIcon>
              <Text as="label">Demo</Text>
            </DemoTabClient>
            <DemoTabClient value="source">
              <BakaIcon>code</BakaIcon>
              <Text as="label">Source</Text>
            </DemoTabClient>
          </BakaTabGroup>
        </div>
        <BakaDivider />
        <DemoIFrame src={props.src} style={{ minHeight: props.style?.height }} />
        <DemoSource src={props.src} />
      </DemoState>
    </BakaCard>
  );
};
