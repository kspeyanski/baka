/// <reference types="@baka/design-material-you" />

import type { Meta, StoryObj } from "@storybook/react";
import { BakaBadge, BakaBottomNavigation, BakaBottomNavigationItem, BakaIcon, BakaLabel } from "@baka/react";
import Docs from "./bottom-navigation.mdx";

const meta = {
  title: "Material You/Primitives/Bottom Navigation",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    docs: {
      page: Docs,
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    // define any arg types here
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    items: 3,
    labels: true,
  },
  argTypes: {
    items: {
      control: {
        type: "range",
        min: 3,
        max: 5,
      },
    },
    labels: {
      control: "boolean",
    },
  },
  render: (args) => {
    return (
      <BakaBottomNavigation style={{ width: 400 }}>
        <BakaBottomNavigationItem selected={true}>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          {args.labels ? <BakaLabel>BakaLabel</BakaLabel> : null}
        </BakaBottomNavigationItem>
        {Array.from({ length: args.items - 2 }, (_, i) => (
          <BakaBottomNavigationItem key={i}>
            <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
            {args.labels ? <BakaLabel>BakaLabel</BakaLabel> : null}
          </BakaBottomNavigationItem>
        ))}
        <BakaBottomNavigationItem>
          <BakaIcon variant={"filled"}>
            fiber_manual_record
            {args.labels ? (
              <BakaBadge
                variant={"single-digit"}
                style={{ position: "absolute", right: 16, top: 2 }}
              >
                3
              </BakaBadge>
            ) : (
              <BakaBadge variant={"small"} style={{ position: "absolute", right: 16, top: 2 }} />
            )}
          </BakaIcon>
          {args.labels ? <BakaLabel>BakaLabel</BakaLabel> : null}
        </BakaBottomNavigationItem>
      </BakaBottomNavigation>
    );
  },
};
