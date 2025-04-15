"use client";
import React from "react";

import { useAsyncFocusBlur } from "@shared/use-async-focus-blur";
import {
  initialState,
  SEARCH_ACTION,
  SearchAction,
  searchReducer,
  SearchState,
} from "./state";

const SearchContext = React.createContext<[SearchState, (action: SearchAction) => void]>([
  initialState,
  () => {},
]);
export const useSearch = () => React.useContext(SearchContext);

export const SearchClient = ({
  children: child,
}: {
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
}) => {
  const [state, dispatch] = React.useReducer(searchReducer, initialState);

  const onAsyncFocus = () => {
    dispatch({ type: SEARCH_ACTION.OPEN });
  };

  const onAsyncBlur = () => {
    dispatch({ type: SEARCH_ACTION.CLOSE });
  };

  const onKeyDown = (event: React.KeyboardEvent<any>) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        dispatch({ type: SEARCH_ACTION.FOCUS_NEXT });
        break;
      case "ArrowUp":
        event.preventDefault();
        dispatch({ type: SEARCH_ACTION.FOCUS_PREV });
        break;
      case "Enter":
        event.preventDefault();
        // const item = _popup.current?.querySelector(`[data-focused="true"]`) as HTMLElement;
        // if (item) {
        //   item.click();
        // }
        (document?.activeElement as HTMLElement)?.blur();
        dispatch({ type: SEARCH_ACTION.RESET });
        break;
      case "Escape":
        // input.current?.blur();
        break;
    }
  };

  const { onFocus, onBlur } = useAsyncFocusBlur({
    onFocus: onAsyncFocus,
    onBlur: onAsyncBlur,
  });

  return (
    <SearchContext.Provider value={[state, dispatch]}>
      {React.isValidElement(child)
        ? React.cloneElement(child, {
            onFocus,
            onBlur,
          })
        : null}
    </SearchContext.Provider>
  );
};
