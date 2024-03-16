"use client";

import { stateClassNames } from "baka-ui";
import clsx from "clsx";
import React from "react";
import { SIDENAV_ACTION, useSidenav } from "./sidenav.state";

export type SidenavCategoryItemClient = {
  url: string;
  title: string;
  children: React.ReactElement;
  readOnly?: boolean;
  match?: string[];
};

export const SidenavCategoryItemClient = (props: SidenavCategoryItemClient) => {
  const { readOnly } = props;
  const [state, dispatch] = useSidenav();

  const selected = state.expanded === props.title;

  const handleClick = React.useCallback(() => {
    dispatch({ type: SIDENAV_ACTION.SET_GROUP, payload: props.title });
  }, []);

  return React.cloneElement(props.children, {
    className: clsx(
      props.children?.props?.className,
      stateClassNames({
        selected: selected && !readOnly,
        activated: state.group?.title === props.title && !(selected && !readOnly),
      })
    ),
    onClick: handleClick,
  });
};
