"use client";

import { Icon } from "@material-you/components";
import { useSidenav } from "@shared/sidenav/sidenav-state.client";

export const SidenavIcon = () => {
  const [state] = useSidenav();

  return <Icon>{state.open ? "menu_open" : "menu"}</Icon>;
};
