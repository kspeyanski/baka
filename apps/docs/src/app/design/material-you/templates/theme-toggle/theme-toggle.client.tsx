"use client";
import React from "react";
import { ThemeContext } from "../color-scheme/color-scheme.client";

export type ThemeToggleClientProps = {
  children: React.ReactElement;
};

export const ThemeToggleClient = (props: ThemeToggleClientProps) => {
  const [theme, setTheme] = React.useContext(ThemeContext);
  const handleClick = React.useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme]);

  return React.cloneElement(props.children, {
    onClick: handleClick,
    children: React.cloneElement(props.children.props.children, {
      ...props.children.props.children.props,
      children: theme === "light" ? "dark_mode" : "light_mode",
    }),
  });
};
