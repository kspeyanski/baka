"use client";

import React from "react";
import {
  SIDENAV_ACTION,
  useSidenav,
} from "@shared/sidenav/sidenav-state.client";

export const SidenavButtonClient = (props: { children: any }) => {
  const [, dispatch] = useSidenav();

  const handleClick = () => {
    dispatch({ type: SIDENAV_ACTION.TOGGLE });
  };

  return React.cloneElement(props.children, {
    ...props.children.props,
    onClick: handleClick,
  });
};
