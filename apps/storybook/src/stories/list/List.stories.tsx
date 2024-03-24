import {
  BakaAvatar,
  BakaCheckbox,
  BakaList,
  BakaListItem,
  BakaText,
  BakaIcon,
  BakaRadio,
  BakaSwitch,
} from "baka-ui";
import type { Meta, StoryObj } from "@storybook/react";
import Docs from "./list.mdx";

const meta = {
  title: "Material You/Primitives/List",
  component: (props) => <BakaList {...props} />,
  render: (props) => {
    return <BakaList {...props} />;
  },
  parameters: {
    layout: "centered",
    docs: {
      page: Docs,
    },
  },
  tags: ["autodocs"],
} as Meta<typeof BakaList>;

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
      <div className="container-high">
        <BakaList {...args} style={{ width: 360, ...(args.scrollable ? { maxHeight: 300 } : {}) }}>
          {Array.from({ length: args.items }, (_, i) => (
            <BakaListItem key={i}>
              <BakaAvatar>A</BakaAvatar>
              <BakaText style={{ flexGrow: 1 }} variant={"body-large"}>
                BakaList item
              </BakaText>
              <BakaCheckbox readOnly={true} checked={true} />
            </BakaListItem>
          ))}
        </BakaList>
      </div>
    );
  },
  parameters: {
    docs: {
      storyDescription: "A basic list with title and description.",
    },
  },
};

export const Items: Story = {
  args: {
    prefix: "avatar",
    suffix: "none",
    ["supporting text"]: true,
    "multi-line": true,
  },
  argTypes: {
    prefix: {
      control: "radio",
      options: ["none", "icon", "avatar", "image", "video", "checkbox", "radio", "switch"],
    },
    suffix: {
      control: "radio",
      options: ["none", "checkbox", "icon"],
    },
    "multi-line": {
      if: { arg: "supporting text", eq: true },
    },
  },
  render: (args) => {
    return (
      <div className="container-low">
        <BakaList>
          <BakaListItem
            style={{ width: 360 }}
            variant={[
              args?.["multi-line"] && "multi-line",
              args?.["prefix"] === "video" && "video",
            ]}
          >
            {args.prefix === "avatar" && <BakaAvatar>A</BakaAvatar>}
            {args.prefix === "icon" && <BakaIcon>person</BakaIcon>}
            {args.prefix === "image" && (
              <img style={{ width: 56, height: 56 }} src="./media-small.png" />
            )}
            {args.suffix === "checkbox" ? <BakaCheckbox readOnly={true} checked={true} /> : null}
            {args.prefix === "video" && <img style={{ width: 114, height: 64 }} src="./media.png" />}
            {args.prefix === "radio" && <BakaRadio checked={true} readOnly={true} />}
            {args.prefix === "switch" && <BakaSwitch checked={false} readOnly={true} />}
            <div
              style={{ display: "flex", flexGrow: 1, flexDirection: "column", overflow: "hidden" }}
            >
              <BakaText variant={"body-large"}>List Item</BakaText>
              {args["supporting text"] ? (
                <BakaText
                  style={{
                    flexGrow: 1,
                    ...(!args?.["multi-line"]
                      ? {
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }
                      : {}),
                  }}
                  variant={"body-medium"}
                >
                  Supporting line text lorem ipsum dolor sit amet, consectetur.
                </BakaText>
              ) : null}
            </div>
            {args.suffix === "checkbox" ? <BakaCheckbox readOnly={true} checked={true} /> : null}
            {args.suffix === "icon" ? <BakaIcon>arrow_right</BakaIcon> : null}
          </BakaListItem>
        </BakaList>
      </div>
    );
  },
};
