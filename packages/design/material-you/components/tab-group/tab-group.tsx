import { BakaComponent, BakaProps } from "baka-ui";

export type TabGroupProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "tab-group"
> & {};

export const TabGroup = <T extends React.ElementType = "div">(
  props: TabGroupProps<T>
) => {
  return <BakaComponent as="div" {...props} baka="tab-group" />;
};

export type TabProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "tab"
> & {};

export const Tab = <T extends React.ElementType = "div">(
  props: TabProps<T>
) => {
  return <BakaComponent as="div" {...props} baka="tab" />;
};
