export const stateClassNames = (state: object = {}) => {
  return Object.keys(state)
    .reduce((acc, key) => {
      if (state[key]) {
        acc.push(`baka-state--${key}`);
      }
      return acc;
    }, [])
    .join(" ");
};