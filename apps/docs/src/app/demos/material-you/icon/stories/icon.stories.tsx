import React from "react";
import type { BakaDesign } from "baka-material-you";
import type { Meta, StoryObj } from "@storybook/react";
import IconStory, { IconStoryProps, defaultProps } from "./page";
import icons from "./icons.json";

const variantOptions: BakaDesign["icon"]["variant"][] = ["primary", "error"];

const meta: Meta = {
  title: "Material You/Icon",
  component: (props: IconStoryProps) => <IconStory {...props} />,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    icon: {
      control: {
        type: "select",
      },
      options: icons,
    },

    variant: {
      control: "radio",
      map: {
        none: null,
        primary: "primary",
        error: "error",
      },
      options: ["none", ...variantOptions],
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
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
