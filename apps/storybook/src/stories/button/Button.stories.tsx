/// <reference types="@baka/design-material-you" />

import { ButtonVariant } from "@baka/design-core";
import { BakaButton, BakaButtonProps, BakaIcon } from "@baka/react";
import type { Meta, StoryObj } from "@storybook/react";
import Docs from "./button.mdx";

const variantOptions: ButtonVariant[] = ["filled", "outlined", "text", "elevated", "tonal"];
const defaultArgs: BakaButtonProps = {
  hovered: false,
  focused: false,
  activated: false,
  disabled: false,
};
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Material You/Primitives/Button",
  component: (props) => <BakaButton {...props} />,
  render: (props) => {
    return <BakaButton {...props} />;
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
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: "radio",
      options: variantOptions,
    },
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof BakaButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    children: "Label",
    variant: "filled",
    ...defaultArgs,
  },
};

export const IconButton: Story = {
  args: {
    toggleable: false,
    selected: false,
    variant: "icon",
    children: <BakaIcon>settings</BakaIcon>,
    ...defaultArgs,
  },
  render: (props) => {
    const { toggleable, ...other } = props;

    return (
      <BakaButton
        {...other}
        variant={
          [
            "icon",
            ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
            toggleable ? "toggle" : null,
          ].filter(Boolean) as ButtonVariant[]
        }
      />
    );
  },
  argTypes: {
    variant: {
      control: "radio",
      mapping: {
        ["icon"]: "icon",
        ["+ filled"]: ["icon", "filled"],
        ["+ tonal"]: ["icon", "tonal"],
        ["+ outlined"]: ["icon", "outlined"],
      },
      options: ["icon", "+ filled", "+ tonal", "+ outlined"],
    },
    selected: { control: "boolean", if: { arg: "toggleable" } },
    toggleable: { control: "boolean" },
  },
};

export const TextAndIcon: Story = {
  render: (props: BakaButtonProps & { icon?: string }) => {
    const { icon, children, ...other } = props;

    return (
      <BakaButton {...other}>
        <BakaIcon>{icon}</BakaIcon>
        {children}
      </BakaButton>
    );
  },
  args: {
    children: "Label",
    icon: "add",
    variant: "filled",
    ...defaultArgs,
  },
};

export const FAB: Story = {
  render: ({ extended, ...props }) => {
    return (
      <BakaButton
        {...props}
        variant={[
          ...(Array.isArray(props.variant) ? props.variant : [props.variant]),
          ...(Array.isArray(props["variant (size)"])
            ? props["variant (size)"]
            : [props["variant (size)"]]),
          extended ? "extended" : null,
        ]}
      >
        {props.children} {extended && "Label"}
      </BakaButton>
    );
  },
  args: {
    children: <BakaIcon>mode_edit</BakaIcon>,
    variant: "fab",
    ["variant (size)"]: "medium",
    extended: false,
    ...defaultArgs,
  },
  argTypes: {
    variant: {
      control: "radio",
      mapping: {
        ["fab"]: "fab",
        ["+ primary"]: ["fab", "primary"],
        ["+ secondary"]: ["fab", "secondary"],
        ["+ tertiary"]: ["fab", "tertiary"],
      },
      options: ["fab", "+ primary", "+ secondary", "+ tertiary"],
    },
    ["variant (size)"]: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    extended: { control: "boolean" },
  },
};
