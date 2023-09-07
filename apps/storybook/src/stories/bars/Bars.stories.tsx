/// <reference types="@baka/design-material-you" />

import type { Meta, StoryObj } from "@storybook/react";
import { BakaBottomBar, BakaButton, BakaText, BakaTopBar, BakaIcon } from "@baka/react";
import Docs from "./bars.mdx";

const meta = {
  title: "Material You/Primitives/Bars",
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

export const TopBar: Story = {
  render: (args) => {
    switch (args.variant) {
      case "large":
        return (
          <BakaTopBar
            style={{ width: 404 }}
            variant={[args.variant, args.elevated ? "elevated" : null].filter(Boolean)}
          >
            <div style={{ display: "flex", flex: 1 }}>
              <div style={{ flex: 1 }}>
                <BakaButton variant={"icon"}>
                  <BakaIcon>arrow_back</BakaIcon>
                </BakaButton>
              </div>
              <BakaButton variant={"icon"}>
                <BakaIcon>attach_file</BakaIcon>
              </BakaButton>
              <BakaButton variant={"icon"}>
                <BakaIcon>today</BakaIcon>
              </BakaButton>
              <BakaButton variant={"icon"}>
                <BakaIcon>more_vert</BakaIcon>
              </BakaButton>
            </div>
            <div style={{ paddingInline: 16 }}>
              <BakaText variant="title-large" style={{ flexGrow: 1, textAlign: "left" }}>
                Title
              </BakaText>
            </div>
          </BakaTopBar>
        );
      case "medium":
        return (
          <BakaTopBar
            style={{ width: 404 }}
            variant={[args.variant, args.elevated ? "elevated" : null].filter(Boolean)}
          >
            <div style={{ display: "flex", flex: 1 }}>
              <div style={{ flex: 1 }}>
                <BakaButton variant={"icon"}>
                  <BakaIcon>arrow_back</BakaIcon>
                </BakaButton>
              </div>
              <BakaButton variant={"icon"}>
                <BakaIcon>attach_file</BakaIcon>
              </BakaButton>
              <BakaButton variant={"icon"}>
                <BakaIcon>today</BakaIcon>
              </BakaButton>
              <BakaButton variant={"icon"}>
                <BakaIcon>more_vert</BakaIcon>
              </BakaButton>
            </div>
            <div style={{ paddingInline: 16 }}>
              <BakaText variant="title-large" style={{ flexGrow: 1, textAlign: "left" }}>
                Title
              </BakaText>
            </div>
          </BakaTopBar>
        );
      case "small":
      default:
        return (
          <BakaTopBar
            style={{ width: 404 }}
            variant={[args.variant, args.elevated ? "elevated" : null].filter(Boolean)}
          >
            <BakaButton variant={"icon"}>
              <BakaIcon>menu</BakaIcon>
            </BakaButton>
            <BakaText variant="title-large" style={{ flexGrow: 1, textAlign: "center" }}>
              Product
            </BakaText>
            <BakaButton variant={"icon"}>
              <BakaIcon variant={"filled"}>account_circle</BakaIcon>
            </BakaButton>
          </BakaTopBar>
        );
    }
  },
  args: {
    variant: "small",
    elevated: false,
  },
  argTypes: {
    elevated: {
      control: {
        type: "boolean",
      },
    },
    variant: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
  },
};

export const BottomBar: Story = {
  render: (args) => {
    return (
      <>
        <BakaBottomBar style={{ width: 400, display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 8 }}>
            {["circle", "change_history", "rectangle", "pentagon", "hexagon"]
              .slice(0, args.items)
              .map((shape) => (
                <BakaButton variant={"icon"}>
                  <BakaIcon>{shape}</BakaIcon>
                </BakaButton>
              ))}
          </div>
          {args.FAB ? (
            <BakaButton variant={["fab", "secondary"]}>
              <BakaIcon>add</BakaIcon>
            </BakaButton>
          ) : null}
        </BakaBottomBar>
      </>
    );
  },
  args: {
    items: 3,
    FAB: true,
  },
  argTypes: {
    items: {
      control: {
        type: "range",
        min: 1,
        max: 5,
      },
    },
    FAB: {
      control: "boolean",
    },
  },
};
