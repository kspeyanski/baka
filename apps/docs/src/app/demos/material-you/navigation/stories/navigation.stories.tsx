import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import NavigationStory, { NavigationStoryProps } from "./page";

const meta: Meta = {
  title: "Material You/Navigation",
  component: (props: NavigationStoryProps) => <NavigationStory {...props} />,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Bottom: Story = {
  args: {
    labels: true,
    items: 3,
    type: "bottom",
  },
  argTypes: {
    items: {
      control: {
        type: "range",
        min: 3,
        max: 5,
      },
      if: { arg: "type", eq: "bottom" },
    },
    labels: {
      control: "boolean",
      if: { arg: "type", eq: "bottom" },
    },
  },
};

export const Side: Story = {
  args: {
    type: "side",
    icons: true,
  },
  argTypes: {
    icons: {
      control: "boolean",
    },
  },
};

export const Rail: Story = {
  args: {
    type: "rail",
    labels: true,
    align: "top",
  },
  argTypes: {
    labels: {
      control: "boolean",
    },
    align: {
      control: "radio",
      options: ["top", "center", "bottom"],
      if: { arg: "type", eq: "rail" },
    },
  },
};
