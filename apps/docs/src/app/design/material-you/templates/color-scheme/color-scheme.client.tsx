"use client";

import clsx from "clsx";
import React from "react";

export type ColorSchemeProps = {
  children: React.ReactElement;
};

export const ThemeContext = React.createContext<[string | null, Function]>([null, () => {}]);

export const ColorScheme = (props: ColorSchemeProps) => {
  const [theme, setTheme] = React.useState<string | null>(null);

  React.useLayoutEffect(() => {
    if (theme) {
      window.localStorage.setItem("baka-theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {React.cloneElement(props.children, {
        ...props.children.props,
        className: clsx(
          {
            "theme-light": theme === "light",
            "theme-dark": theme === "dark",
          },
          props.children.props?.className
        ),
      })}
    </ThemeContext.Provider>
  );
};
