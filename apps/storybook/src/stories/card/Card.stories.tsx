/// <reference types="baka-material-you" />

import { BakaAvatar, BakaButton, BakaCard, BakaText, BakaIcon, BakaText, BakaText } from "baka-ui";
import type { Meta, StoryObj } from "@storybook/react";
import Docs from "./card.mdx";
import "./styles.scss";

const meta = {
  title: "Material You/Primitives/Card",
  component: (props) => <BakaCard {...props} />,
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    },
  },
  args: {
    variant: "outlined",
  },
  tags: ["autodocs"],
} as Meta<typeof BakaCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <BakaCard {...args} style={{ width: 360 }}>
      <div
        style={{
          display: "flex",
          padding: "12px 4px 12px 16px",
          alignSelf: "stretch",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <BakaAvatar>
            <span>A</span>
          </BakaAvatar>
          <BakaText style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <BakaText variant={"title-medium"}>Header</BakaText>
            <BakaText variant={"body-medium"}>Subhead</BakaText>
          </BakaText>
        </div>
        <BakaButton variant={["icon"]}>
          <BakaIcon>more_vert</BakaIcon>
        </BakaButton>
      </div>
      <div>
        <img
          src="./media.png"
          alt="media"
          width={720}
          height={376}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignSelf: "stretch",
          flexDirection: "column",
          gap: 32,
          padding: 16,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <BakaText variant={"body-large"}>Title</BakaText>
          <BakaText variant={"body-medium"}>Subhead</BakaText>
        </div>
        <BakaText variant={"body-medium"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </BakaText>
        <div style={{ display: "flex", alignSelf: "stretch", justifyContent: "flex-end", gap: 8 }}>
          <BakaButton variant={["outlined"]}>Enabled</BakaButton>
          <BakaButton variant={["filled"]}>Enabled</BakaButton>
        </div>
      </div>
    </BakaCard>
  ),
  args: {
    variant: "outlined",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["outlined", "elevated", "filled"],
    },
  },
};

export const Horizontal: Story = {
  render: (args) => (
    <BakaCard variant={["horizontal", args.variant]} style={{ width: 360 }}>
      <div style={{ display: "flex", flexGrow: 1, gap: 16, padding: 16, alignItems: "center" }}>
        <BakaAvatar>
          <span>A</span>
        </BakaAvatar>
        <div style={{ display: "flex", flexGrow: 1, flexDirection: "column", gap: 4 }}>
          <BakaText variant="title-medium">Header</BakaText>
          <BakaText variant="body-medium">Subhead</BakaText>
        </div>
      </div>

      <img src="./media-small.png" alt="media" width={80} height={80} />
    </BakaCard>
  ),
  args: {
    variant: "outlined",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["outlined", "elevated", "filled"],
    },
  },
  parameters: {
    docs: {
      storyDescription: "A card displaying product information.",
    },
  },
};
