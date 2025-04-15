"use client";

import React from "react";

import clsx from "clsx";
import { useSidenav } from "@shared/sidenav/sidenav-state.client";

export const SidenavSubcategoryClient = (props: {
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
}) => {
  const [state] = useSidenav();

  return React.cloneElement(props.children, {
    className: clsx(props.children.props?.className, {
      ["invisible"]: !state.open,
      ["!opacity-100"]: state.open,
    }),
  });
};
