import React from "react";
import type { BakaDesign } from "baka-material-you";
import type { Meta, StoryObj } from "@storybook/react";
import DialogStory, { DialogStoryProps, defaultProps } from "./page";

const variantOptions: BakaDesign["dialog"]["variant"][] = [
  "basic",
  "full-screen",
];

const meta: Meta = {
  title: "Material You/Dialog",
  component: (props: DialogStoryProps) => <DialogStory {...props} />,
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
    itemsCount: 3,
  },
  argTypes: {
    variant: {
      control: "radio",
      defaultValue: undefined,
      options: variantOptions,
    },
    itemsCount: {
      control: {
        type: "range",
        min: 3,
        max: 5,
      },
      if: { arg: "items", eq: true },
    },
  },
};
