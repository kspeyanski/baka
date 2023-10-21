import { BakaSwitch } from "baka-ui";
import type { Meta, StoryObj } from "@storybook/react";
import Docs from "./switch.mdx";
import { BakaSwitchVariant } from "baka-core";

const meta = {
  title: "Material You/Primitives/Switch",
  component: (props) => <BakaSwitch {...props} />,
  render: (props) => {
    return <BakaSwitch {...props} />;
  },
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    },
  },
  tags: ["autodocs"],
} as Meta<typeof BakaSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    checked: false,
    disabled: false,
    variant: "none" as BakaSwitchVariant,
  },
  argTypes: {
    checked: {
      control: "boolean",
    },
    variant: {
      control: "radio",
      maps: {
        icon: "icon",
        none: "basic",
      },
      options: ["none", "icon"],
    },
  },
  render: (args) => {
    return <BakaSwitch {...args} />;
  },
};
