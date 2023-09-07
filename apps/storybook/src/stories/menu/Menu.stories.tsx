/// <reference types="@baka/design-material-you" />

import {
  BakaButton,
  BakaMenu,
  BakaMenuItem,
  BakaText,
  BakaIcon,
  BakaInput,
  BakaLabel,
  BakaTextField,
} from "@baka/react";
import type { Meta, StoryObj } from "@storybook/react";
import Docs from "./menu.mdx";

const meta = {
  title: "Material You/Primitives/Menu",
  component: (props) => <BakaMenu {...props} />,
  render: (props) => {
    return <BakaMenu {...props} />;
  },
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    },
  },
  tags: ["autodocs"],
} as Meta<typeof BakaMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    items: 7,
    scrollable: false,
  },
  argTypes: {
    scrollable: {
      control: "boolean",
    },
    items: {
      control: {
        type: "range",
        min: 1,
        max: 10,
      },
    },
  },
  render: (args) => {
    return (
      <div>
        <BakaMenu {...args} style={{ width: 360, ...(args.scrollable ? { maxHeight: 300 } : {}) }}>
          {Array.from({ length: args.items }, (_, i) => (
            <BakaMenuItem key={i}>
              <BakaText variant={"body-large"}>Menu item</BakaText>
            </BakaMenuItem>
          ))}
        </BakaMenu>
      </div>
    );
  },
  parameters: {
    docs: {
      storyDescription: "A basic menu with title and description.",
    },
  },
};

export const Popup: Story = {
  args: {
    component: "text-field",
  },
  argTypes: {
    component: {
      control: "radio",
      options: ["text-field", "text-field-icon", "icon-button"],
    },
  },
  render: (args) => {
    return (
      <div>
        {(() => {
          switch (args.component) {
            case "text-field":
            case "text-field-icon":
              return (
                <BakaTextField variant={"outlined"}>
                  {args.component === "text-field-icon" ? <BakaIcon>search</BakaIcon> : null}
                  <BakaLabel variant={"body-small"}>BakaLabel</BakaLabel>
                  <BakaInput defaultValue="BakaInput" type="text" />
                  <BakaButton variant={"icon"}>
                    <BakaIcon>cancel</BakaIcon>
                  </BakaButton>
                </BakaTextField>
              );
            case "icon-button":
              return (
                <BakaButton variant={["icon", "filled", "toggle"]} selected={true}>
                  <BakaIcon>settings</BakaIcon>
                </BakaButton>
              );
            default:
              return;
          }
        })()}
        <BakaMenu>
          <BakaMenuItem>
            {args.component === "text-field-icon" ? <BakaIcon>&nbsp;</BakaIcon> : null}
            Menu item
          </BakaMenuItem>
          <BakaMenuItem>
            {args.component === "text-field-icon" ? <BakaIcon>&nbsp;</BakaIcon> : null}
            Menu item
          </BakaMenuItem>
          <BakaMenuItem>
            {args.component === "text-field-icon" ? <BakaIcon>&nbsp;</BakaIcon> : null}
            Menu item
          </BakaMenuItem>
          <BakaMenuItem>
            {args.component === "text-field-icon" ? <BakaIcon>&nbsp;</BakaIcon> : null}
            Menu item
          </BakaMenuItem>
        </BakaMenu>
      </div>
    );
  },
};
