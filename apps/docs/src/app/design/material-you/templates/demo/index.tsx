import { Label } from "@/components/typography";
import { BakaCard, BakaDivider, BakaIcon, BakaTab, BakaTabGroup } from "baka-ui";

export type DemoProps = {
  src: string;
};

export const Demo = (props: DemoProps) => {
  return (
    <BakaCard>
      <div className="bg-surface-container">
        <BakaTabGroup variant={"secondary"}>
          <BakaTab selected={true}>
            <BakaIcon>terminal</BakaIcon>
            <Label>Demo</Label>
          </BakaTab>
          <BakaTab>
            <BakaIcon>code</BakaIcon>
            <Label>Source</Label>
          </BakaTab>
        </BakaTabGroup>
      </div>
      <BakaDivider />
      <iframe src={props.src} /* title="demo" */ sandbox="allow-scripts allow-same-origin" />
    </BakaCard>
  );
};
