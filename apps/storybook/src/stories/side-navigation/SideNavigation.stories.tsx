/// <reference types="baka-material-you" />

import type { Meta, StoryObj } from "@storybook/react";
import {
  BakaDivider,
  BakaSideNavigation,
  BakaSideNavigationItem,
  BakaText,
  BakaIcon,
  BakaLabel,
} from "baka-ui";
import Docs from "./side-navigation.mdx";

const meta = {
  title: "Material You/Primitives/Side Navigation",
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
  args: {
    icons: true,
  },
  argTypes: {
    icons: {
      control: "boolean",
    },
  },
  render: (args) => {
    return (
      <BakaSideNavigation style={{ width: 300 }}>
        <div style={{ padding: "18px 16px" }}>
          <BakaText variant={"title-small"}>Title</BakaText>
        </div>
        <div style={{ padding: "18px 16px" }}>
          <BakaText variant={"title-small"}>Section header</BakaText>
        </div>
        <BakaSideNavigationItem selected={true}>
          {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
          <BakaLabel>BakaLabel</BakaLabel>
          <BakaText>100+</BakaText>
        </BakaSideNavigationItem>
        <BakaSideNavigationItem>
          {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
          <BakaLabel>BakaLabel</BakaLabel>
          <BakaText>100+</BakaText>
        </BakaSideNavigationItem>
        <BakaSideNavigationItem>
          {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
          <BakaLabel>BakaLabel</BakaLabel>
          <BakaText>100+</BakaText>
        </BakaSideNavigationItem>
        <BakaDivider />
        <div style={{ padding: "18px 16px" }}>
          <BakaText variant={"title-small"}>Section header</BakaText>
        </div>
        <BakaSideNavigationItem>
          {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
          <BakaLabel>BakaLabel</BakaLabel>
        </BakaSideNavigationItem>
        <BakaSideNavigationItem>
          {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
          <BakaLabel>BakaLabel</BakaLabel>
        </BakaSideNavigationItem>
        <BakaSideNavigationItem>
          {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
          <BakaLabel>BakaLabel</BakaLabel>
        </BakaSideNavigationItem>
      </BakaSideNavigation>
    );
  },
};
