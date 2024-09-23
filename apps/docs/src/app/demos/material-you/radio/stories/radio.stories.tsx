import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import RadioStory, { RadioStoryProps, defaultProps } from "./page";

const meta: Meta = {
  title: "Material You/Radio",
  component: (props: RadioStoryProps) => <RadioStory {...props} />,
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
  argTypes: {},
};
