"use client";

import clsx from "clsx";
import React from "react";

export type ColorSchemeProps = {
  children: React.ReactElement;
};

export const ThemeContext = React.createContext<[string | null, Function]>([
  null,
  () => {},
]);

const applyTheme = () => {
  let theme = localStorage.getItem("baka-theme");
  if (theme) {
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add("theme-" + theme);
  }
};

export const ColorScheme = (props: ColorSchemeProps) => {
  const [theme, setTheme] = React.useState<string | null>(null);

  React.useLayoutEffect(() => {
    setTheme(
      typeof window !== "undefined"
        ? window.localStorage.getItem("baka-theme")
        : null
    );
  }, []);

  React.useEffect(() => {
    if (theme) {
      window.localStorage.setItem("baka-theme", theme);
      applyTheme();
    }
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        {props.children}

        <script suppressHydrationWarning={true}>
          {`(${String(applyTheme)})()`}
        </script>
      </ThemeContext.Provider>
    </>
  );
};
