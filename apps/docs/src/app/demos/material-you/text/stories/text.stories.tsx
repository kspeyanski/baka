
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TextStory, { TextStoryProps, defaultProps } from "./page";

const meta: Meta = {
  title: "Material You/Text",
  component: (props: TextStoryProps) => <TextStory {...props} />,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: {
        type: "radio",
      },
      options: ["on-surface", "on-surface-variant"],
    },
    variant: {
      control: "radio",
      map: {
        none: null,
        primary: "primary",
        error: "error",
      },
      options: [
        "display-large",
        "display-medium",
        "display-small",
        "headline-large",
        "headline-medium",
        "headline-small",
        "title-large",
        "title-medium",
        "title-small",
        "label-large",
        "label-medium",
        "label-small",
        "body-large",
        "body-medium",
        "body-small",
      ],
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
