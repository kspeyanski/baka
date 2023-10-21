/// <reference types="@baka/design-material-you" />

import type { Meta, StoryObj } from "@storybook/react";
import { BakaButton, BakaTextField, BakaIcon, BakaInput, BakaLabel } from "@baka/react";
import Docs from "./text-field.mdx";
import React from "react";

const meta = {
  title: "Material You/Primitives/Text Field",
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
  render: (args) => {
    return (
      <BakaTextField {...args} style={{ width: 300 }} {...{ [args.state]: true }}>
        {args["leading icon"] && <BakaIcon>search</BakaIcon>}
        {args.label && <BakaLabel>BakaLabel</BakaLabel>}
        <BakaInput
          {...(args.placeholder && { placeholder: "Placeholder" })}
          value={args.input}
          empty={!args.input}
        />
        {args["trailing icon"] &&
          (args.state === "invalid" ? (
            <BakaButton variant={["icon"]}>
              <BakaIcon variant={["filled", "error"]}>error</BakaIcon>
            </BakaButton>
          ) : (
            <BakaButton variant={"icon"}>
              <BakaIcon>cancel</BakaIcon>
            </BakaButton>
          ))}
      </BakaTextField>
    );
  },
  args: {
    variant: "filled",
    state: "idle",
    input: "",
    placeholder: true,
    label: true,
    ["leading icon"]: true,
    ["trailing icon"]: true,
  },
  argTypes: {
    input: {
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
      options: ["idle", "hovered", "focused", "invalid", "disabled"],
    },
    variant: {
      control: "radio",
      options: ["filled", "outlined"],
    },
  },
};
