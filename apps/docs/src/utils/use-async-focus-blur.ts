import * as React from "react";

/**
 * @hidden
 */
export type AsyncFocusBlurArgs<T extends any[]> = {
  onFocus?: (...event: T) => void;
  onBlur?: (...event: T) => void;
  /**
   * @hidden
   */
  onSyncFocus?: (event: React.FocusEvent<any>) => void;
  /**
   * @hidden
   */
  onSyncBlur?: (event: React.FocusEvent<any>) => void;
};

/**
 * An utility function for asynchronous focus/blur handling.
 *
 * By default, the `onFocus` and `onBlur` callbacks are called every time a child components receives/loses focus.
 * Use this utility hook for scenarios where you need to know if the parent has received focus for the first time, or completely lost focus.
 *
 * @returns
 */
export function useAsyncFocusBlur<T extends any[]>({
  onFocus,
  onBlur,
  onSyncFocus,
  onSyncBlur,
}: AsyncFocusBlurArgs<T>): AsyncFocusBlurArgs<T> {
  const focused = React.useRef(false);

  const tick = React.useRef(0);

  const nextTick = React.useCallback(
    (f: () => any): void => {
      clearTimeout(tick.current);
      tick.current = window.setTimeout(() => f());
    },
    [tick]
  );

  const handleFocus = React.useCallback(
    (...event: any) => {
      clearTimeout(tick.current);

      if (onSyncFocus) {
        onSyncFocus.call(undefined, event[0]);
      }

      if (focused.current) {
        return;
      }
      focused.current = true;

      if (onFocus) {
        onFocus.call(undefined, ...event);
      }
    },
    [focused, onFocus, onSyncFocus]
  );

  const handleBlur = React.useCallback(
    (...event: any) => {
      if (onSyncBlur) {
        onSyncBlur.call(undefined, event[0]);
      }

      nextTick(() => {
        if (!focused.current) {
          return;
        }
        if (onBlur) {
          focused.current = false;
          onBlur.call(undefined, ...event);
        }
      });
    },
    [focused, nextTick, onBlur, onSyncBlur]
  );

  React.useEffect(() => {
    return () => {
      clearTimeout(tick.current);
    };
  }, []);

  return {
    onFocus: handleFocus,
    onBlur: handleBlur,
  };
}
