import {
  BakaAvatar,
  BakaButton,
  BakaCheckbox,
  BakaDialog,
  BakaText,
  BakaText,
  BakaIcon,
  BakaListItem,
  BakaText,
} from "baka-ui";
import type { Meta, StoryObj } from "@storybook/react";
import Docs from "./dialog.mdx";

const meta = {
  title: "Material You/Primitives/Dialog",
  component: (props) => <BakaDialog {...props} />,
  render: (props) => {
    return <BakaDialog {...props} />;
  },
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    },
  },
  tags: ["autodocs"],
} as Meta<typeof BakaDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    variant: "basic",
    icon: false,
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["basic", "full-screen"],
    },
    icon: {
      control: "boolean",
    },
  },
  render: (args) => {
    return (
      <BakaDialog style={{ width: 320 }} variant={args.variant}>
        <div style={{ display: "flex", gap: 16, flexDirection: "column" }}>
          {args.icon && <BakaIcon style={{ justifyContent: "center" }}>mobile_friendly</BakaIcon>}
          <BakaText
            style={{ display: "flex", justifyContent: args.icon ? "center" : "flex-start" }}
            variant={"headline-small"}
          >
            Basic dialog title
          </BakaText>
          <BakaText variant={"body-medium"}>
            A dialog is a type of modal window that appears in front of app content to provide
            critical information, or prompt for a decision to be made.
          </BakaText>
        </div>
        <div style={{ display: "flex", gap: 8, width: "100%", justifyContent: "flex-end" }}>
          <BakaButton variant={["text"]}>Action 2</BakaButton>
          <BakaButton variant={["text"]}>Action 1</BakaButton>
        </div>
      </BakaDialog>
    );
  },
  parameters: {
    docs: {
      storyDescription: "A basic dialog with title and description.",
    },
  },
};

export const WithList: Story = {
  args: {
    variant: "basic",
    icon: false,
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["basic", "full-screen"],
    },
    icon: {
      control: "boolean",
    },
  },
  render: (args) => {
    return (
      <BakaDialog style={{ width: 320 }} variant={args.variant}>
        {/* TODO: extract to sub-component */}
        <div style={{ display: "flex", gap: 16, flexDirection: "column" }}>
          {args.icon && <BakaIcon style={{ justifyContent: "center" }}>mobile_friendly</BakaIcon>}
          <BakaText
            style={{ display: "flex", justifyContent: args.icon ? "center" : "flex-start" }}
            variant={"headline-small"}
          >
            Dialog Title
          </BakaText>
          <BakaText variant={"body-medium"}>
            A dialog is a type of modal window that appears in front of app content to provide
            critical information, or prompt for a decision to be made.
          </BakaText>
        </div>
        <ul
          style={{
            background: "none",
            padding: 0,
            margin: 0,
            width: "calc(100% + 48px)",
            marginInline: "-24px",
          }}
        >
          <BakaListItem>
            <BakaAvatar>A</BakaAvatar>
            <BakaText style={{ flexGrow: 1 }} variant={"body-large"}>
              BakaList item
            </BakaText>
            <BakaText>100+</BakaText>
            <BakaCheckbox readOnly={true} />
          </BakaListItem>
          <BakaListItem>
            <BakaAvatar>A</BakaAvatar>
            <BakaText style={{ flexGrow: 1 }} variant={"body-large"}>
              BakaList item
            </BakaText>
            <BakaText>100+</BakaText>
            <BakaCheckbox readOnly={true} checked={true} />
          </BakaListItem>
          <BakaListItem>
            <BakaAvatar>A</BakaAvatar>
            <BakaText style={{ flexGrow: 1 }} variant={"body-large"}>
              BakaList item
            </BakaText>
            <BakaText>100+</BakaText>
            <BakaCheckbox readOnly={true} checked={true} />
          </BakaListItem>
        </ul>
        <div style={{ display: "flex", gap: 8, width: "100%", justifyContent: "flex-end" }}>
          <BakaButton variant={["text"]}>Action 2</BakaButton>
          <BakaButton variant={["text"]}>Action 1</BakaButton>
        </div>
      </BakaDialog>
    );
  },
  parameters: {
    docs: {
      storyDescription: "A dialog with a list of items and actions.",
    },
  },
};
