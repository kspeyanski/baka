import React from "react";
import type { BakaDesign } from "baka-material-you";
import type { Meta, StoryObj } from "@storybook/react";
import BadgeStory, { BadgeStoryProps, defaultProps } from "./page";

const variantOptions: BakaDesign["badge"]["variant"][] = [
  "small",
  "single-digit",
  "multi-digit",
];

const meta: Meta = {
  title: "Material You/Badge",
  component: (props: BadgeStoryProps) => <BadgeStory {...props} />,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: variantOptions,
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
