"use client";

import clsx from "clsx";
import React from "react";
import { SIDENAV_ACTION, useSidenav } from "./sidenav.state";
import { Button, ButtonProps } from "@/components/buttons/button";
import { BakaButtonProps } from "baka-ui";

export type SidenavCategoryClientProps = {
  children: React.ReactNode;
  variant: BakaButtonProps["variant"];
};

export const ToggleButton = (props: ButtonProps) => {
  const [state, dispatch] = useSidenav();

  const handleClick = React.useCallback(() => {
    dispatch({ type: SIDENAV_ACTION.TOGGLE });
  }, [dispatch]);

  return (
    <Button
      variant={["icon", props.variant].filter(Boolean) as BakaButtonProps["variant"]}
      onClick={handleClick}
      className={clsx(props.className)}
    >
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
