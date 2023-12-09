"use client";

import clsx from "clsx";
import { useDemoState } from "./demo.state";

export type TabContentClientProps = {
  value: "demo" | "source";
  children?: React.ReactElement;
};

export const TabContentClient = (props: TabContentClientProps) => {
  const [state] = useDemoState();

  return props.children ? (
    <props.children.type
      {...props.children.props}
      className={clsx({
        hidden: state !== props.value,
      })}
    />
  ) : null;
};
