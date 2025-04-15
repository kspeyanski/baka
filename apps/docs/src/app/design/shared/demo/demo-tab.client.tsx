"use client";

import React from "react";
import { stateClassNames } from "baka-ui";
import { useDemoState } from "./demo-state.client";
import clsx from "clsx";

export type DemoTabClientProps = {
  value: "demo" | "source";
  children?: React.ReactElement<any>;
};

export const DemoTabClient = (props: DemoTabClientProps) => {
  const { value, children, ...other } = props;
  const [state, setState] = useDemoState();

  const handleClick = (_event: React.MouseEvent<any>) => {
    setState(props.value);
  };

  return React.isValidElement(children)
    ? React.cloneElement(children, {
        className: clsx(
          children.props?.className,
          stateClassNames({
            selected: state === props.value,
          })
        ),
        onClick: handleClick,
      })
    : null;
};
