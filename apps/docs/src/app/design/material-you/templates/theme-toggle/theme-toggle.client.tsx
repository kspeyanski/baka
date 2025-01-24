"use client";
import React from "react";
import { ThemeContext } from "../color-scheme/color-scheme.client";
import { Icon } from "baka-material-you";

export type ThemeToggleClientProps = {
  children: React.ReactElement<any>;
};

export const ThemeToggleClient = (props: ThemeToggleClientProps) => {
  const [theme, setTheme] = React.useContext(ThemeContext);

  const handleClick = React.useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [setTheme, theme]);

  return React.cloneElement(props.children, {
    ...props.children.props,
    onClick: handleClick,
  });
};

export const ThemeToggleIconClient = () => {
  const [theme] = React.useContext(ThemeContext);

  return (
    <Icon>
      {theme ? (theme === "light" ? "dark_mode" : "light_mode") : null}
    </Icon>
  );
};
