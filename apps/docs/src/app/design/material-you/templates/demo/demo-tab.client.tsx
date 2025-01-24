"use client";

import React from "react";
import { useDemoState } from "./demo.state";
import { Tab as BakaTab } from "baka-material-you";

export type DemoTabClientProps = {
  value: "demo" | "source";
  children?: React.ReactNode;
};

export const DemoTabClient = (props: DemoTabClientProps) => {
  const { value, ...other } = props;
  const [state, setState] = useDemoState();

  const handleClick = (_event: React.MouseEvent<any>) => {
    setState(props.value);
  };

  return (
    <BakaTab
      {...other}
      state={{
        selected: state === props.value,
      }}
      onClick={handleClick}
    />
  );
};
