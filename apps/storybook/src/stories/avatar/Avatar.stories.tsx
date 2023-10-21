/// <reference types="baka-material-you" />

import { BakaAvatar, BakaIcon } from "baka-ui";
import type { Meta, StoryObj } from "@storybook/react";
import Docs from "./avatar.mdx";

const defaultArgs = {};

const meta: Meta = {
  title: "Material You/Primitives/Avatar",
  component: (props) => <BakaAvatar {...props} />,
  render: (props) => {
    return <BakaAvatar {...props} />;
  },
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: "A",
    ...defaultArgs,
  },
};

export const IconBakaAvatar: Story = {
  args: {
    children: <BakaIcon>check</BakaIcon>,
    ...defaultArgs,
  },
};

export const ImageBakaAvatar: Story = {
  args: {
    children: <BakaIcon as="img" src="./avatar.svg" />,
    ...defaultArgs,
  },
};
