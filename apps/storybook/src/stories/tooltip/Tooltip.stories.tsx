import {
  BakaButton,
  BakaTooltip,
  BakaParagraph,
  BakaLabel,
  BakaTooltipProps,
} from "baka-ui";
import type { Meta, StoryObj } from "@storybook/react";
import Docs from "./tooltip.mdx";

const meta = {
  title: "Material You/Primitives/Tooltip",
  component: (props) => <BakaTooltip {...props} />,
  render: (props) => {
    return <BakaTooltip {...props} />;
  },
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    },
  },
  tags: ["autodocs"],
} as Meta<typeof BakaTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: "basic" as BakaTooltipProps["variant"],
    actions: true,
  },
  argTypes: {
    variant: {
      control: "radio",
      map: {
        basic: "",
        plain: "plain",
      },
      options: ["basic", "plain"],
    },
  },
  render: (args) => {
    return args.variant === "plain" ? (
      <BakaTooltip variant={args.variant}>
        <BakaParagraph variant="body-small">Supporting text</BakaParagraph>
      </BakaTooltip>
    ) : (
      <BakaTooltip style={{ width: 320 }} variant={args.variant}>
        <div style={{ padding: "12px 16px 0 16px" }}>
          <BakaLabel variant={"title-small"}>Title</BakaLabel>
          <BakaParagraph variant={"body-medium"}>
            Supporting line text lorem ipsum dolor sit amet, consectetur
          </BakaParagraph>
        </div>
        {args.actions ? (
          <div style={{ display: "flex", gap: 8, paddingInline: 8 }}>
            <BakaButton variant={"text"}>Action</BakaButton>
            <BakaButton variant={"text"}>Action</BakaButton>
          </div>
        ) : null}
      </BakaTooltip>
    );
  },
  parameters: {
    docs: {
      storyDescription: "A basic tooltip with title and description.",
    },
  },
};
