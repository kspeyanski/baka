"use client";
import { stateClassNames } from "baka-ui";
import clsx from "clsx";
import React from "react";
import { useAsyncFocusBlur } from "@shared/use-async-focus-blur";
import { searchReducer, initialState, SEARCH_ACTION } from "./state";
import { useSearch } from "./search.client";

export const SearchFieldClient = ({
  children: child,
  openClassName,
}: {
  children?: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  openClassName?: string;
}) => {
  const element = React.createRef<HTMLElement>();
  const [state, dispatch] = useSearch();

  const onClick = () => {};

  const onKeyDown = () => {};


  return React.isValidElement(child)
    ? React.cloneElement(child, {
        ref: element,
        className: clsx(
          child.props?.className,
          {
            openClassName: state.open,
          },
          stateClassNames({
            focused: state.open,
          })
        ),
        onKeyDown,
        onClick,
      })
    : null;
};
