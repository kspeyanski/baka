"use client";

import React from "react";
import { useDemoState } from "./demo.state";
import { BakaTab } from "baka-ui";

export type DemoTabClientProps = {
  value: "demo" | "source";
  children?: React.ReactNode;
};

export const DemoTabClient = (props: DemoTabClientProps) => {
  const { value, ...other } = props;
  const [state, setState] = useDemoState();

  const handleClick = React.useCallback(
    (_event: React.MouseEvent<any>) => {
      setState(props.value);
    },
    [props.value, setState]
  );

  return <BakaTab {...other} selected={state === props.value} onClick={handleClick} />;
};
