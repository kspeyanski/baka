import React from "react";
import type { BakaDesign } from "baka-material-you";
import type { Meta, StoryObj } from "@storybook/react";
import CardStory, { CardStoryProps, defaultProps } from "./page";

const variantOptions: BakaDesign["card"]["variant"][] = [
  "outlined",
  "elevated",
  "filled",
];

const meta: Meta = {
  title: "Material You/Card",
  component: (props: CardStoryProps) => <CardStory {...props} />,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: variantOptions,
    },
    type: { table: { disable: true } },
    children: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: {
    variant: "outlined",
    ...defaultProps,
  },
};

export const Horizontal: Story = {
  args: {
    variant: "outlined",
    ...defaultProps,
    type: "horizontal",
  },
};
