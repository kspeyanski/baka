import React from "react";
import type { BakaDesign } from "baka-material-you";
import type { Meta, StoryObj } from "@storybook/react";
import CheckboxStory, { CheckboxStoryProps, defaultProps } from "./page";

const variantOptions: BakaDesign["checkbox"]["variant"][] = [
  "primary",
  "error",
];

const meta: Meta = {
  title: "Material You/Checkbox",
  component: (props: CheckboxStoryProps) => <CheckboxStory {...props} />,
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
      map: {
        primary: null,
        error: "error",
      },
      options: ["primary", "error"],
    },
    indeterminate: {
      control: "boolean",
      if: { arg: "checked", neq: true },
    },
  },
};
