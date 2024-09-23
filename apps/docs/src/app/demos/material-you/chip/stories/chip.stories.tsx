import React from "react";
import type { BakaDesign } from "baka-material-you";
import type { Meta, StoryObj } from "@storybook/react";
import ChipStory, { ChipStoryProps, defaultProps } from "./page";

const variantOptions: (BakaDesign["chip"]["variant"] | "normal")[] = [
  "normal",
  "elevated",
];

const meta: Meta = {
  title: "Material You/Chip",
  component: (props: ChipStoryProps) => <ChipStory {...props} />,
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
  argTypes: {
    variant: {
      control: "radio",
      mapping: {
        normal: undefined,
        elevated: "elevated",
      },
      defaultValue: undefined,
      options: variantOptions,
    },
    avatar: {
      if: { arg: "leadingIcon", eq: false },
    },
  },
};
