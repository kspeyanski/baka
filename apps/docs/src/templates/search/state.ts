export type SearchState = {
  open: boolean;
  touched: boolean;
  focused: number;
  results: any[];
  value: string;
};

export const initialState: SearchState = {
  open: false,
  touched: false,
  focused: 0,
  value: "",
  results: [],
};

export enum SEARCH_ACTION {
  OPEN = "open",
  CLOSE = "close",
  SEARCH = "search",
  FOCUS_NEXT = "focusNext",
  FOCUS_PREV = "focusPrev",
  SET_RESULTS = "setResults",
  RESET = "reset",
}

export type SearchAction = {
  type: SEARCH_ACTION;
  payload?: any;
};

const inRange =
  (min: number = 0, max: number = 0) =>
  (value: number) =>
    Math.max(min, Math.min(max, value));

export const searchReducer = (state: SearchState, action: SearchAction) => {
  switch (action.type) {
    case SEARCH_ACTION.OPEN:
      return { ...state, open: true, focused: 0 };
    case SEARCH_ACTION.SEARCH:
      return { ...state, open: true, touched: true, value: action.payload};
    case SEARCH_ACTION.CLOSE:
      return { ...state, open: false };
    case SEARCH_ACTION.FOCUS_NEXT:
      return {
        ...state,
        focused: inRange(0, state.results?.length - 1)(state.focused + 1),
      };
    case SEARCH_ACTION.FOCUS_PREV:
      return {
        ...state,
        focused: inRange(0, state.results?.length - 1)(state.focused - 1),
      };
    case SEARCH_ACTION.SET_RESULTS:
      return {
        ...state,
        results: action.payload || [],
        focus: inRange(0, action.payload?.length)(state.focused),
      };
    case SEARCH_ACTION.RESET:
      return initialState;
    default:
      return state;
  }
};
