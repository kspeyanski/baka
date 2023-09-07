import { BakaRadioButton } from "@baka/react";
import type { Meta, StoryObj } from "@storybook/react";
import Docs from "./radio-button.mdx";

const meta = {
  title: "Material You/Primitives/Radio Button",
  component: (props) => <BakaRadioButton {...props} />,
  render: (props) => {
    return <BakaRadioButton {...props} />;
  },
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    },
  },
  tags: ["autodocs"],
} as Meta<typeof BakaRadioButton>;

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
    return <BakaRadioButton {...args} />;
  },
};
