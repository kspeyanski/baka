import { BakaTabGroup, BakaTab, BakaText, BakaDivider, BakaIcon } from "baka-ui";
import type { Meta, StoryObj } from "@storybook/react";
import Docs from "./tabs.mdx";

const meta = {
  title: "Material You/Primitives/Tabs",
  component: (props) => <BakaTabGroup {...props} />,
  render: (props) => {
    return <BakaTabGroup {...props} />;
  },
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    },
  },
  tags: ["autodocs"],
} as Meta<typeof BakaTabGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabGroup: Story = {
  args: {
    variant: "primary",
    overflow: false,
    icons: true,
    labels: true,
  },
  argTypes: {
    variant: {
      control: "radio",
      maps: {
        primary: "primary",
        secondary: "secondary",
      },
      options: ["primary", "secondary"],
    },
    icons: {
      control: "boolean",
    },
    labels: {
      control: "boolean",
    },
  },
  render: (args) => {
    return (
      <>
        <BakaTabGroup
          style={{ width: args.overflow ? 310 : 360 }}
          variant={[args.variant, args.overflow && "overflow"]}
        >
          <BakaTab selected={true}>
            {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
            <BakaText>{args.labels ? "Tab" : null}</BakaText>
          </BakaTab>
          <BakaTab>
            {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
            <BakaText>{args.labels ? "Tab" : null}</BakaText>
          </BakaTab>
          <BakaTab>
            {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
            <BakaText>{args.labels ? "Tab" : null}</BakaText>
          </BakaTab>
          {args.overflow ? (
            <>
              <BakaTab>
                {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
                <BakaText>{args.labels ? "Tab" : null}</BakaText>
              </BakaTab>
              <BakaTab>
                {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
                <BakaText>{args.labels ? "Tab" : null}</BakaText>
              </BakaTab>
              <BakaTab>
                {args.icons ? <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon> : null}
                <BakaText>{args.labels ? "Tab" : null}</BakaText>
              </BakaTab>
            </>
          ) : null}
        </BakaTabGroup>
        <BakaDivider />
      </>
    );
  },
  parameters: {
    docs: {
      storyDescription: "A basic tabs with title and description.",
    },
  },
};
