"use client";

import React from "react";
import { Docs } from "contentlayer/generated";
import { usePathname } from "next/navigation";

const SidenavContext = React.createContext<[SidenavState, React.Dispatch<SidenavAction>]>([
  {
    open: false,
    selected: "",
    expanded: "",
    group: {
      title: "",
      docs: [],
    },
  },
  () => {},
]);

export enum SIDENAV_ACTION {
  TOGGLE = "TOGGLE",
  OPEN = "OPEN",
  CLOSE = "CLOSE",
  SET_GROUP = "SET_GROUP",
  RESET = "RESET",
}

export type SidenavAction = {
  type: SIDENAV_ACTION;
  payload?: any;
};

export type SidenavState = {
  open?: boolean;
  selected: string | null;
  expanded: string | null;
  group: {
    title: string;
    icon?: string;
    docs: Array<{ title: string; url: string }>;
  } | null;
};

export type SidenavStateProps = {
  data: Array<{ title: string; icon?: string; docs: Pick<Docs, "url" | "title">[] }>;
  children?: React.ReactNode;
};

export const useSidenav = () => React.useContext(SidenavContext);

const sidenavReducer = (
  state: Partial<SidenavState>,
  action: SidenavAction,
  groups: SidenavStateProps["data"]
): Partial<SidenavState> => {
  switch (action.type) {
    case SIDENAV_ACTION.TOGGLE:
      console.log("here", state.open);
      return { ...state, open: !state.open };
    case SIDENAV_ACTION.OPEN:
      return { ...state, open: true };
    case SIDENAV_ACTION.CLOSE:
      return { ...state, open: false };
    case SIDENAV_ACTION.SET_GROUP:
      return {
        ...state,
        open: true,
        group: groups.find((group) => group.title === action.payload) ?? null,
      };
    case SIDENAV_ACTION.RESET:
      return {
        ...state,
        open: false,
        group: groups.find((group) => group.title === state.selected) ?? null,
      };
    default:
      return state;
  }
};

export const useSidenavState = () => React.useContext(SidenavContext);

export const SidenavState = (props: SidenavStateProps) => {
  const pathname = usePathname();
  const expanded =
    props.data?.find((group) => group.docs.some((doc) => pathname.endsWith(doc.url)))?.title ??
    null;
  const selected =
    props.data
      ?.find((group) => group.docs.some((doc) => pathname.endsWith(doc.url)))
      ?.docs.find((doc) => pathname.endsWith(doc.url))?.url ?? null;
  const group = props.data?.find((group) => group.title === expanded) ?? null;

  const [state, setState] = React.useState<Partial<SidenavState>>({
    open: false,
    group,
  });

  const handleDispatch = React.useCallback(
    (action: SidenavAction) => {
      const proposed = sidenavReducer(state, action, props.data);
      console.log("there", proposed);
      setState(proposed);
    },
    [state]
  );

  return (
    <SidenavContext.Provider
      value={[
        {
          open: state.open,
          selected,
          group: state.group ?? group,
          expanded,
        },
        handleDispatch,
      ]}
    >
      {props.children}
    </SidenavContext.Provider>
  );
};
