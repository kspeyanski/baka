/// <reference types="@baka/design-material-you" />

import { BakaCheckbox } from "@baka/react";
import type { Meta, StoryObj } from "@storybook/react";
import Docs from "./checkbox.mdx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Material You/Primitives/Checkbox",
  component: (props) => <BakaCheckbox {...props} />,
  render: (props) => {
    return <BakaCheckbox {...props} />;
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    docs: {
      page: Docs,
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof BakaCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    // @ts-expect-error - `primary` is the default value
    variant: "primary",
    checked: true,
    indeterminate: false,
    hovered: false,
    focused: false,
    activated: false,
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "radio",
      map: {
        primary: null,
        error: "error",
      },
      options: ["primary", "error"],
    },
    indeterminate: {
      control: "boolean",
      if: { arg: "checked", neq: true },
    },
  },
};
