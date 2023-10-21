import type { Meta, StoryObj } from "@storybook/react";
import { BakaBadge } from "baka-ui";
import Docs from "./badge.mdx";

const meta = {
  title: "Material You/Primitives/Badge",
  component: BakaBadge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    docs: {
      page: Docs,
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    // define any arg types here
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (props) => {
    return (
      <BakaBadge {...props} variant={"single-digit"}>
        {(() => {
          switch (props.variant) {
            case "dot":
              return null;
            case "single-digit":
              return 1;
            case "multi-digit":
              return 42;
          }
        })()}
      </BakaBadge>
    );
  },
  args: {
    children: "Badge",
    variant: "single-digit",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["dot", "single-digit", "multi-digit"],
    },
  },
};
