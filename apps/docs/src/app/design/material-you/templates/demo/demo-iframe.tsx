import { TabContentClient } from "./tab-content.client";

export type DemoIFrameProps = {
  src: string;
};

export const DemoIFrame = (props: DemoIFrameProps) => {
  return (
    <TabContentClient value="demo">
      <iframe src={props.src} className="iframe" sandbox="allow-scripts allow-same-origin" />
    </TabContentClient>
  );
};
