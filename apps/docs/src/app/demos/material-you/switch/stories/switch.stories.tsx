import React from "react";
import type { BakaDesign } from "baka-material-you";
import type { Meta, StoryObj } from "@storybook/react";
import SwitchStory, { SwitchStoryProps, defaultProps } from "./page";

const variantOptions: BakaDesign["switch"]["variant"][] = ["icon"];

const meta: Meta = {
  title: "Material You/Switch",
  component: (props: SwitchStoryProps) => <SwitchStory {...props} />,
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
    variant: "",
  },
  argTypes: {
    variant: {
      control: "radio",
      defaultValue: "",
      options: ["", ...variantOptions],
    },
  },
};
