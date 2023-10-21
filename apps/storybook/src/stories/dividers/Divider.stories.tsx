import { BakaDivider } from "baka-ui";
import type { Meta, StoryObj } from "@storybook/react";
import Docs from "./divider.mdx";

const meta = {
  title: "Material You/Primitives/Divider",
  component: (props) => <BakaDivider {...props} />,
  render: (props) => {
    return <BakaDivider {...props} />;
  },
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    },
  },
  tags: ["autodocs"],
} as Meta<typeof BakaDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: "horizontal",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
  },
  render: (args) => {
    return (
      <div style={args.variant === "horizontal" ? { width: 320 } : { height: 320 }}>
        <BakaDivider {...args} />
      </div>
    );
  },
  parameters: {
    docs: {
      storyDescription: "A basic divider with title and description.",
    },
  },
};
