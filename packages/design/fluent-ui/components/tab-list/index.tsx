import { BakaComponent, BakaProps } from "baka-ui";

export type TabListProps<T extends React.ElementType = "div"> = BakaProps<
  T,
  "tab-list"
> & {};

export const TabList = <T extends React.ElementType = "div">(
  props: TabListProps<T>
) => {
  return <BakaComponent as="div" {...props} baka="tab-list" />;
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
