import clsx from "clsx";
import "./demo.scss";
import { TabContentClient } from "./tab-content.client";

export type DemoIFrameProps = {
  src: string;
  className?: string;
  style?: React.CSSProperties;
};

export const DemoIFrame = (props: DemoIFrameProps) => {
  return (
    <TabContentClient value="demo">
      <iframe
        src={props.src}
        style={
          {
            "--iframe-height": `${props.style?.minHeight ?? 350}px`,
          } as any
        }
        className={clsx("iframe", props.className)}
        sandbox="allow-scripts allow-same-origin"
      />
    </TabContentClient>
  );
};
