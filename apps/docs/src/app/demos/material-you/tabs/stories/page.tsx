import { Icon, Tab, TabGroup, TabGroupProps, Text } from "baka-material-you";

export type TabsStoryProps = {
  tabs: number;
  overflow: boolean;
  tab: {
    icons: boolean;
    text: boolean;
  };
  variant: "primary" | "secondary";
};

export const defaultProps = {
  variant: "primary",
  overflow: false,
  tab: {
    icons: true,
    text: true,
  },
  tabs: 3,
};

export default function TabStory(props: TabsStoryProps) {
  const args = { ...defaultProps, ...props };

  return (
    <div style={{ width: args.overflow ? 310 : 120 * args.tabs }}>
      <TabGroup
        variant={
          [args.variant, args.overflow ? "overflow" : null].filter(
            Boolean
          ) as TabGroupProps["variant"]
        }
      >
        {Array.from({ length: args.tabs }, (_, i) => (
          <Tab key={i} state={{ selected: i === 0 }}>
            {args.tab.icons && (
              <Icon variant={"filled"}>fiber_manual_record</Icon>
            )}
            {args.tab.text && <Text>Tab</Text>}
          </Tab>
        ))}
      </TabGroup>
    </div>
  );
}
