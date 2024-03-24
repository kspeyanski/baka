/// <reference types="baka-material-you" />

import type { Meta, StoryObj } from "@storybook/react";
import { BakaButton, BakaNavigationRail, BakaNavigationRailItem, BakaIcon, BakaText } from "baka-ui";
import Docs from "./navigation-rail.mdx";

const meta = {
  title: "Material You/Primitives/Navigation Rail",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
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
    labels: true,
    align: "top",
  },
  argTypes: {
    labels: {
      control: "boolean",
    },
    align: {
      control: "radio",
      options: ["top", "center", "bottom"],
    },
  },
  render: (args) => {
    return (
      <BakaNavigationRail style={{ height: 'calc(100vh - 100px)' }}>
        <div
          style={{
            display: "flex",
            gap: 4,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "stretch",
          }}
        >
          <BakaButton variant="icon">
            <BakaIcon>menu</BakaIcon>
          </BakaButton>
          {
            <BakaButton variant={["fab", "tertiary"]}>
              <BakaIcon>mode_edit</BakaIcon>
            </BakaButton>
          }
        </div>
        {/* <div style={{ margin: "auto" }}> */}
        <div
          style={
            args.align === "center"
              ? { margin: "auto" }
              : args.align === "bottom"
              ? { marginTop: "auto" }
              : {}
          }
        >
          <BakaNavigationRailItem selected={true}>
            <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
            {args.labels ? <BakaText>BakaText</BakaText> : null}
          </BakaNavigationRailItem>
          <BakaNavigationRailItem>
            <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          </BakaNavigationRailItem>
          <BakaNavigationRailItem>
            <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          </BakaNavigationRailItem>
          <BakaNavigationRailItem>
            <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          </BakaNavigationRailItem>
        </div>
      </BakaNavigationRail>
    );
  },
};
