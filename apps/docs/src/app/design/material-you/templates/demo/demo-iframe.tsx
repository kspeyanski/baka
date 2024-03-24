import { TabContentClient } from "./tab-content.client";

export type DemoIFrameProps = {
  src: string;
  style?: React.CSSProperties;
};

export const DemoIFrame = (props: DemoIFrameProps) => {
  return (
    <TabContentClient value="demo">
      <iframe
        src={props.src}
        style={{
          "--iframe-height": `${props.style?.minHeight ?? 350}px` ,
        } as any}
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      />
    </TabContentClient>
  );
};
