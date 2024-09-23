import React from "react";
import MenuStory, { MenuStoryProps, defaultProps } from "./page";
import { Meta, StoryObj } from "@storybook/react";
import MenuItemStory, {
  MenuItemStoryProps,
  defaultProps as menuItemDefaultProps,
} from "../menu-item/stories/page";

const meta: Meta = {
  title: "Material You/Menu",
  component: (props: MenuStoryProps) => <MenuStory {...props} />,
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

export const MenuItem: Story = {
  render: (props: MenuItemStoryProps) => <MenuItemStory {...props} />,
  args: {
    ...menuItemDefaultProps,
  },
};
