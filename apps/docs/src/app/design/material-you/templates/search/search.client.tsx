"use client";

import styles from "./search.module.scss";

import React from "react";
import {
  Button,
  Chip,
  Input,
  TextField,
  Icon,
  Menu,
  Text,
  MenuItem,
} from "@material-you/components";
import { search } from "../../../shared/search/actions";
import { usePopup } from "@shared/use-popup";
import Link from "next/link";
import { useAsyncFocusBlur } from "@shared/use-async-focus-blur";
import { SEARCH_ACTION, initialState, searchReducer } from "../../../shared/search/state";
import clsx from "clsx";

export type SearchProps = {};

export const Search = (props: SearchProps) => {
  const input = React.useRef<HTMLInputElement>(null);
  const anchor = React.useRef<HTMLDivElement>(null);
  const _popup = React.useRef<HTMLDivElement>(null);
  const [state, dispatch] = React.useReducer(searchReducer, initialState);

  const results: any[] = React.useDeferredValue(state.results);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SEARCH_ACTION.SEARCH, payload: e.target.value });
    const result = await search(e.target.value);
    dispatch({ type: SEARCH_ACTION.SET_RESULTS, payload: result });
  };

  const handleClick = () => {
    dispatch({ type: SEARCH_ACTION.OPEN });
    input.current?.focus();
  };


  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          input.current?.blur();
          break;
        case "K":
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

  return (
    <>
      <TextField
        variant={"search"}
        onClick={handleClick}
        className={clsx(styles["responsive-search"], {
          [styles["open"]]: state.open,
        })}
        state={{ focused: state.open }}
      >
        <Input
          _ref={input}
          value={state.value}
          placeholder="Search..."
          onChange={handleChange}
          className={clsx(styles["input"])}
        />
        <Chip /* readOnly={true} */ className="hidden sm:flex">⌘K</Chip>
        <Button variant={["icon"]} /* readOnly={true} */>
          <Icon>search</Icon>
        </Button>
      </TextField>
      {state.open && document?.body ? (
        <Menu
          _ref={_popup}
          style={{ position: "fixed" }}
          className="z-40 shadow-none border-t-0"
          // onFocus={onFocus}
          // onBlur={onBlur}
          // onKeyDown={handleKeyDown}
        >
          {results?.length ? (
            results?.map((item, index) => (
              <MenuItem
                key={index}
                data-focused={index === state.focused}
                state={{
                  selected: index === state.focused,
                }}
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
