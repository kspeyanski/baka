import "./demo.scss";

import { Label } from "@/components/typography";
import { BakaCard, BakaDivider, BakaIcon, BakaTab, BakaTabGroup } from "baka-ui";
import { DemoSource } from "./demo-source";
import { DemoState } from "./demo.state";
import { DemoTabClient } from "./demo-tab.client";
import { DemoIFrame } from "./demo-iframe";

export type DemoProps = {
  src: string;
};

export const Demo = (props: DemoProps) => {
  return (
    <BakaCard>
      <DemoState>
        <div className="bg-surface-container">
          <BakaTabGroup variant={"secondary"}>
            <DemoTabClient value="demo">
              <BakaIcon>terminal</BakaIcon>
              <Label>Demo</Label>
            </DemoTabClient>
            <DemoTabClient value="source">
              <BakaIcon>code</BakaIcon>
              <Label>Source</Label>
            </DemoTabClient>
          </BakaTabGroup>
        </div>
        <BakaDivider />
        <DemoIFrame src={props.src} />
        <DemoSource src={props.src} />
      </DemoState>
    </BakaCard>
  );
};
