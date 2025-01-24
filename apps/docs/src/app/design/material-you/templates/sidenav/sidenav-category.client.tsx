"use client";

import clsx from "clsx";
import React from "react";
import { SIDENAV_ACTION, useSidenav } from "./sidenav.state";
import { Button, ButtonProps } from "@/components/buttons/button";
import { ButtonProps as BakaButtonProps } from "baka-material-you";

export type SidenavCategoryClientProps = {
  children: React.ReactNode | React.ReactElement<any>;
  variant?: BakaButtonProps["variant"];
};

export const ToggleButton = (props: ButtonProps & { children: any }) => {
  const [state, dispatch] = useSidenav();

  const handleClick = () => {
    dispatch({ type: SIDENAV_ACTION.TOGGLE });
  };

  return (
    <Button
      variant={
        ["icon", props.variant].filter(Boolean) as BakaButtonProps["variant"]
      }
      onClick={handleClick}
      className={clsx(props.className)}
    >
      {React.isValidElement(props.children)
        ? React.cloneElement(props.children, {
            children: state.open ? "menu_open" : "menu",
          })
        : props.children}
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
            ["sm:hidden"]: !open,
          }),
        })
      : child;
  });
};
