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
      case "BakaLabel & trailing icon":
        return (
          <BakaChip {...other} label="BakaLabel & trailing icon">
            <span>BakaLabel</span>
            <BakaIcon>close</BakaIcon>
          </BakaChip>
        );
      case "Leading BakaIcon & label":
        return (
          <BakaChip {...other} label="Leading BakaIcon & label">
            <BakaIcon variant={"primary"}>local_taxi</BakaIcon>
            <span>BakaLabel</span>
          </BakaChip>
        );
      case "Leading icon, label & trailing icon":
        return (
          <BakaChip {...other} label="Leading icon, label & trailing icon">
            <BakaIcon variant={"primary"}>local_taxi</BakaIcon>
            <span>BakaLabel</span>
            <BakaIcon>close</BakaIcon>
          </BakaChip>
        );
      case "BakaLabel & Avatar":
        return (
          <BakaChip {...other} label="BakaLabel & Avatar">
            <BakaAvatar>
              {props.selected ? (
                <BakaIcon variant={["filled"]}>check</BakaIcon>
              ) : (
                <img src="/avatar-light.svg" />
              )}
            </BakaAvatar>
            <span>BakaLabel</span>
          </BakaChip>
        );
      case "BakaLabel, avatar & icon":
        return (
          <BakaChip {...other} label="BakaLabel, avatar & icon">
            <BakaAvatar>
              {props.selected ? (
                <BakaIcon variant={["filled"]}>check</BakaIcon>
              ) : (
                <img src="/avatar-light.svg" />
              )}
            </BakaAvatar>
            <span>BakaLabel</span>
            <BakaIcon>close</BakaIcon>
          </BakaChip>
        );
      default:
        return <BakaChip {...other}>BakaLabel</BakaChip>;
    }
  },
  args: {
    // @ts-expect-error - `normal` is the default value
    variant: "normal",
    configuration: "BakaLabel only",
    ...defaultArgs,
  },
  argTypes: {
    configuration: {
      control: "radio",
      map: {
        "BakaLabel only": null,
        "BakaLabel & trailing icon": "trailing-icon",
        "Leading BakaIcon & label": "leading-icon",
        "Leading icon, label & trailing icon": "leading-icon-trailing-icon",
        "BakaLabel & Avatar": "avatar",
        "BakaLabel, avatar & trailing icon": "avatar-trailing-icon",
      },
      options: [
        "BakaLabel only",
        "BakaLabel & trailing icon",
        "Leading BakaIcon & label",
        "Leading icon, label & trailing icon",
        "BakaLabel & Avatar",
        "BakaLabel, avatar & icon",
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
