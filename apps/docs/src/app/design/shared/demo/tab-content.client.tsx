"use client";

import clsx from "clsx";
import { useDemoState } from "./demo-state.client";
import React from "react";

export type TabContentClientProps = {
  value: "demo" | "source";
  children?: React.ReactElement;
};

export const TabContentClient = (props: TabContentClientProps) => {
  const { value, children } = props;
  const [state] = useDemoState();

  return React.isValidElement(children)
    ? React.cloneElement(children, {
        className: clsx(
          {
            hidden: state !== value,
          },
          children.props.className
        ),
      })
    : null;
};
