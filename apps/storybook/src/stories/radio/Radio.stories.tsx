import { BakaRadio } from "baka-ui";
import type { Meta, StoryObj } from "@storybook/react";
import Docs from "./radio.mdx";

const meta = {
  title: "Material You/Primitives/Radio Button",
  component: (props) => <BakaRadio {...props} />,
  render: (props) => {
    return <BakaRadio {...props} />;
  },
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    },
  },
  tags: ["autodocs"],
} as Meta<typeof BakaRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    checked: true,
  },
  argTypes: {
    checked: {
      control: "boolean",
    },
  },
  render: (args) => {
    return <BakaRadio {...args} />;
  },
};
