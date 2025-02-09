export const stateClassNames = (
  state: object = {},
  classNames?: Record<string, string>
): string => {
  return classNames
    ? Object.keys(state)
        .reduce((acc, key) => {
          if (state[key]) {
            acc.push(classNames[`baka-state--${key}`]);
          }
          return acc;
        }, [])
        .join(" ")
    : Object.keys(state)
        .reduce((acc, key) => {
          if (state[key]) {
            acc.push(`baka-state--${key}`);
          }
          return acc;
        }, [])
        .join(" ");
};
