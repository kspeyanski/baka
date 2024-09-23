import React from "react";
import ListStory, { ListStoryProps, defaultProps } from "./page";
import { Meta, StoryObj } from "@storybook/react";
import ListItemStory, {
  ListItemStoryProps,
  defaultProps as listItemDefaultProps,
} from "../list-item/stories/page";

const meta: Meta = {
  title: "Material You/List",
  component: (props: ListStoryProps) => <ListStory {...props} />,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    ...defaultProps,
  },
  argTypes: {
    items: {
      control: {
        type: "range",
        min: 1,
        max: 10,
      },
    },
  },
};

export const ListItem: Story = {
  render: (props: ListItemStoryProps) => <ListItemStory {...props} />,
  args: {
    ...listItemDefaultProps,
  },
  argTypes: {
    prefix: {
      mapping: {
        ["none"]: null,
      },
      control: {
        type: "radio",
      },
      options: [
        "none",
        "avatar",
        "icon",
        "media",
        "checkbox",
        "radio",
        "switch",
      ],
    },
    media: {
      control: {
        type: "radio",
      },
      if: { arg: "prefix", eq: "media" },
      options: ["image", "video"],
    },
    suffix: {
      mapping: {
        ["none"]: null,
      },
      control: {
        type: "radio",
      },
      options: ["none", "checkbox", "icon"],
    },
    multiLine: {
      control: {
        type: "boolean",
      },
    },
  },
};
