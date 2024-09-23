
import React from "react";
import type { Design } from "baka-core";
import type { Meta, StoryObj } from "@storybook/react";
import TextFieldStory, { TextFieldStoryProps, defaultProps } from "./page";

const variantOptions: Design["TextFieldVariant"][] = ["filled", "outlined"];

const meta: Meta = {
  title: "Material You/TextField",
  component: (props: TextFieldStoryProps) => <TextFieldStory {...props} />,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: variantOptions,
    },
    children: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: {
    variant: "filled",
    state: "",
    value: defaultProps.value,
    placeholder: defaultProps.placeholder,
    label: defaultProps.label,
    leadingIcon: defaultProps.leadingIcon,
    trailingIcon: defaultProps.trailingIcon,
  },
  argTypes: {
    value: {
      control: "text",
    },
    state: {
      control: "radio",
      map: {
        idle: "",
        hovered: "hovered",
        focused: "focused",
        invalid: "invalid",
        disabled: "disabled",
      },
      options: ["", "hovered", "focused", "invalid", "disabled"],
    },
    variant: {
      control: "radio",
      options: ["filled", "outlined"],
    },
  },
};
