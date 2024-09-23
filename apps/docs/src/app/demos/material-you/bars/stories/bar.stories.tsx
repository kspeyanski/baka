import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import BarStory, { BarStoryProps, defaultProps } from "./page";

const meta: Meta = {
  title: "Material You/Bar",
  component: (props: BarStoryProps) => <BarStory {...props} />,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: {
    ...defaultProps,
  },
  argTypes: {
    position: {
      control: "radio",
      options: ["top", "bottom"],
    },
    elevated: {
      control: "boolean",
      if: {
        arg: "position",
        eq: "top",
      },
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      if: {
        arg: "position",
        eq: "top",
      },
    },
    items: {
      control: {
        type: "range",
        min: 1,
        max: 5,
      },
      if: {
        arg: "position",
        eq: "bottom",
      },
    },
    fab: {
      control: "boolean",
      if: {
        arg: "position",
        eq: "bottom",
      },
    },
  },
};
