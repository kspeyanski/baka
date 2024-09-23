
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TooltipStory, { TooltipStoryProps, defaultProps } from "./page";

const meta: Meta = {
  title: "Material You/Tooltip",
  component: (props: TooltipStoryProps) => <TooltipStory {...props} />,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "radio",
      map: {
        none: null,
        primary: "primary",
        error: "error",
      },
      options: ["plain", "rich"],
    },
    buttons: {
      control: "boolean",
      if: { arg: "variant", eq: "rich" },
    },
    children: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: {
    ...defaultProps,
  },
};
