"use client";

import clsx from "clsx";
import React from "react";
import { SIDENAV_ACTION, useSidenav } from "./sidenav.state";
import { Button, ButtonProps } from "@/components/buttons/button";

export type SidenavCategoryClientProps = {
  children: React.ReactNode;
};

export const ToggleButton = (props: ButtonProps) => {
  const [state, dispatch] = useSidenav();

  const handleClick = React.useCallback(() => {
    dispatch({ type: SIDENAV_ACTION.TOGGLE });
  }, [dispatch]);

  return (
    <Button variant={["icon"]} onClick={handleClick} className={clsx(props.className)}>
      {React.cloneElement(props.children as React.ReactElement, {
        children: state.open ? "menu_open" : "menu",
      })}
    </Button>
  );
};

export const SidenavCategoryClient = (props: SidenavCategoryClientProps) => {
  const [{ open }] = useSidenav();

  return React.Children.map(props.children, (child) => {
    return React.isValidElement(child)
      ? React.cloneElement(child, {
          ...(child?.props || {}),
          className: clsx(child.props?.className, {
            // ["sm:hidden"]: !open
          }),
        })
      : child;
  });
};
