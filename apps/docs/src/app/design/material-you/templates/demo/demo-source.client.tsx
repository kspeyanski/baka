"use client";

import { useDemoState } from "./demo.state";

export type DemoSOurceClientProps = {
  children: React.ReactNode;
};

export const DemoSourceClient = (props: DemoSOurceClientProps) => {
  const [state] = useDemoState();

  if (state === "source") {
    return <>{props.children}</>;
  }
};
