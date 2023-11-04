/// <reference types="baka-material-you" />

import { BakaAvatar, BakaChip, BakaIcon } from "baka-ui";
import type { Meta, StoryObj } from "@storybook/react";
import Docs from "./chip.mdx";

const defaultArgs = {
  hovered: false,
  focused: false,
  activated: false,
  dragged: false,
  selected: false,
};

const meta = {
  title: "Material You/Primitives/Chip",
  component: (props) => <BakaChip {...props} />,
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    },
  },
  args: {},
  tags: ["autodocs"],
} as Meta<typeof BakaChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (props) => {
    const { configuration, ...other } = props;

    switch (configuration) {
      case "Label & trailing icon":
        return (
          <BakaChip {...other} label="Label & trailing icon">
            <span>Label</span>
            <BakaIcon>close</BakaIcon>
          </BakaChip>
        );
      case "Leading BakaIcon & label":
        return (
          <BakaChip {...other} label="Leading BakaIcon & label">
            <BakaIcon variant={"primary"}>local_taxi</BakaIcon>
            <span>Label</span>
          </BakaChip>
        );
      case "Leading icon, label & trailing icon":
        return (
          <BakaChip {...other} label="Leading icon, label & trailing icon">
            <BakaIcon variant={"primary"}>local_taxi</BakaIcon>
            <span>Label</span>
            <BakaIcon>close</BakaIcon>
          </BakaChip>
        );
      case "Label & Avatar":
        return (
          <BakaChip {...other} label="Label & Avatar">
            <BakaAvatar>
              {props.selected ? (
                <BakaIcon variant={["filled"]}>check</BakaIcon>
              ) : (
                <img src="./avatar-light.svg" />
              )}
            </BakaAvatar>
            <span>Label</span>
          </BakaChip>
        );
      case "Label, avatar & icon":
        return (
          <BakaChip {...other} label="Label, avatar & icon">
            <BakaAvatar>
              {props.selected ? (
                <BakaIcon variant={["filled"]}>check</BakaIcon>
              ) : (
                <img src="./avatar-light.svg" />
              )}
            </BakaAvatar>
            <span>Label</span>
            <BakaIcon>close</BakaIcon>
          </BakaChip>
        );
      default:
        return <BakaChip {...other}>Label</BakaChip>;
    }
  },
  args: {
    // @ts-expect-error - `normal` is the default value
    variant: "normal",
    configuration: "Label only",
    ...defaultArgs,
  },
  argTypes: {
    configuration: {
      control: "radio",
      map: {
        "Label only": null,
        "Label & trailing icon": "trailing-icon",
        "Leading BakaIcon & label": "leading-icon",
        "Leading icon, label & trailing icon": "leading-icon-trailing-icon",
        "Label & Avatar": "avatar",
        "Label, avatar & trailing icon": "avatar-trailing-icon",
      },
      options: [
        "Label only",
        "Label & trailing icon",
        "Leading BakaIcon & label",
        "Leading icon, label & trailing icon",
        "Label & Avatar",
        "Label, avatar & icon",
      ],
    },
    variant: {
      control: "radio",
      map: {
        normal: null,
        elevated: "elevated",
      },
      options: ["normal", "elevated"],
    },
  },
};
