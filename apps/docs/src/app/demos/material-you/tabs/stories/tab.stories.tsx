import React from "react";
import TabsStory, { TabsStoryProps, defaultProps } from "./page";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Material You/Tabs",
  component: (props: TabsStoryProps) => <TabsStory {...props} />,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    ...defaultProps,
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary"],
    },
    tab: {
      control: "radio",
      defaultValue: "icons + text",
      mapping: {
        icons: { icons: true, text: false },
        text: { icons: false, text: true },
        "icons + text": { icons: true, text: true },
      },
      options: ["icons", "text", "icons + text"],
    },
    tabs: {
      control: {
        type: "range",
        min: 1,
        max: 10,
      },
    },
  },
};
