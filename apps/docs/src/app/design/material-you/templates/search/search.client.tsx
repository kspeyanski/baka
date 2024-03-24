"use client";

import styles from "./search.module.scss";

import { Button } from "@/components/buttons/button";
import { Chip } from "@/components/chips/chip";
import { Input } from "@/components/inputs/input";
import { TextField } from "@/components/inputs/text-field";
import { Icon } from "@/components/misc/icon";
import React from "react";
import { search } from "./actions";
import { usePopup } from "@/utils/use-popup";
import Link from "next/link";
import { useAsyncFocusBlur } from "@/utils/use-async-focus-blur";
import { SEARCH_ACTION, initialState, searchReducer } from "./state";
import { Menu } from "@/components/menus/menu";
import { MenuItem } from "@/components/menus/menu-item";
import clsx from "clsx";
import { Text } from "@/components/text";

export type SearchProps = {};

export const Search = (props: SearchProps) => {
  const input = React.useRef<HTMLInputElement>(null);
  const anchor = React.useRef<HTMLDivElement>(null);
  const _popup = React.useRef<HTMLDivElement>(null);
  const [state, dispatch] = React.useReducer(searchReducer, initialState);

  const results = React.useDeferredValue(state.results);

  const handleChange = React.useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SEARCH_ACTION.SEARCH, payload: e.target.value });
    const result = await search(e.target.value);
    dispatch({ type: SEARCH_ACTION.SET_RESULTS, payload: result });
  }, []);

  const handleFocus = React.useCallback(() => {
    dispatch({ type: SEARCH_ACTION.OPEN });
  }, []);

  const handleBlur = React.useCallback(() => {
    dispatch({ type: SEARCH_ACTION.CLOSE });
  }, []);

  const handleClick = React.useCallback(() => {
    dispatch({ type: SEARCH_ACTION.OPEN });
    input.current?.focus();
  }, []);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement | HTMLDivElement>) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          dispatch({ type: SEARCH_ACTION.FOCUS_NEXT });
          break;
        case "ArrowUp":
          e.preventDefault();
          dispatch({ type: SEARCH_ACTION.FOCUS_PREV });
          break;
        case "Enter":
          e.preventDefault();
          const item = _popup.current?.querySelector(`[data-focused="true"]`);
          if (item) {
            item.click();
          }
          document?.activeElement?.blur();
          dispatch({ type: SEARCH_ACTION.RESET });
          break;
        case "Escape":
          input.current?.blur();
          break;
      }
    },
    [results, state.focused]
  );

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          input.current?.blur();
          break;
        case "k":
          if (e.metaKey) {
            e.preventDefault();
            input.current?.focus();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  React.useEffect(() => {
    const item = _popup.current?.querySelector(`[data-focused="true"]`);
  }, [state.focused]);

  usePopup(_popup, anchor, {
    syncWidth: true,
    align: {
      anchor: {
        horizontal: "left",
        vertical: "bottom",
      },
      popup: {
        horizontal: "left",
        vertical: "top",
      },
    },
  });

  const { onFocus, onBlur } = useAsyncFocusBlur({ onFocus: handleFocus, onBlur: handleBlur });

  return (
    <>
      <TextField
        variant={"search"}
        _ref={anchor}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        className={clsx(styles["responsive-search"], {
          [styles["open"]]: state.open,
        })}
        focused={state.open}
      >
        <Input
          _ref={input}
          value={state.value}
          placeholder="Search..."
          onChange={handleChange}
          className={clsx(styles["input"])}
        />
        <Chip readOnly={true} className="hidden sm:flex">
          ⌘K
        </Chip>
        <Button variant={["icon"]} readOnly={true}>
          <Icon>search</Icon>
        </Button>
      </TextField>
      {state.open && document?.body ? (
        <Menu
          _ref={_popup}
          style={{ position: "fixed" }}
          className="z-40 shadow-none border-t-0"
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={handleKeyDown}
        >
          {results?.length ? (
            results?.map((item, index) => (
              <MenuItem
                key={index}
                data-focused={index === state.focused}
                selected={index === state.focused}
                as={Link}
                href={`/${item.doc.slug}`}
                tabIndex={index === state.focused ? 0 : -1}
              >
                <div className="flex flex-col">
                  <Text as="label" variant={"label-small"}>
                    {item.doc.group}
                  </Text>
                  {item.doc?.title}
                </div>
              </MenuItem>
            ))
          ) : (
            <MenuItem tabIndex={-1}>
              {state.touched ? "No results found" : "Start typing to search..."}
            </MenuItem>
          )}
        </Menu>
      ) : null}
    </>
  );
};
