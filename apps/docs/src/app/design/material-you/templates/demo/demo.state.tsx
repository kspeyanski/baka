"use client";

import React from "react";

const DemoStateProvider = React.createContext<
  ["demo" | "source", (updated: "demo" | "source") => void]
>(["demo", () => {}]);
export const useDemoState = () => React.useContext(DemoStateProvider);

export type DemoStateProps = {
  children: React.ReactNode;
};

export const DemoState = (props: DemoStateProps) => {
  const [selected, setSelected] = React.useState<"demo" | "source">("demo");

  return (
    <DemoStateProvider.Provider value={[selected, setSelected]}>
      {props.children}
    </DemoStateProvider.Provider>
  );
};
