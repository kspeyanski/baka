/// <reference types="baka-material-you" />

import {
  BakaCard,
  BakaText,
  BakaTextProps,
  BakaText,
  BakaTextProps,
  BakaText,
  BakaTextProps,
  BakaText,
  BakaTextProps,
} from "baka-ui";
import type { Meta } from "@storybook/react";
import Docs from "./typography.mdx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Material You/Primitives/Text",
  component: (props) => <BakaText {...props} />,
  render: (props) => {
    return <BakaText {...props} />;
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    docs: {
      page: Docs,
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof BakaText>;

export default meta;

export const Overview = {
  render: () => {
    return (
      <>
        <BakaCard style={{ padding: 24 }}>
          <BakaText variant={"display-large"}>
            Display Large &mdash; Roboto 57/64 -0.25
          </BakaText>
          <BakaText variant={"display-medium"}>
            Display Medium &mdash; Roboto 45/52 . 0
          </BakaText>
          <BakaText variant={"display-small"}>
            Display Small &mdash; Roboto 36/44 . 0
          </BakaText>
        </BakaCard>
        <br />
        <BakaCard style={{ padding: 24 }}>
          <BakaText variant={"headline-large"}>
            Headline Large &mdash; Roboto 32/40 . 0
          </BakaText>
          <BakaText variant={"headline-medium"}>
            Headline Medium &mdash; Roboto 28/36 . 0
          </BakaText>
          <BakaText variant={"headline-small"}>
            Headline Small &mdash; Roboto 24/32 . 0
          </BakaText>
        </BakaCard>
        <br />
        <BakaCard style={{ padding: 24 }}>
          <BakaText variant={"title-large"}>
            Title Large &mdash; Roboto Regular 22/28 . 0
          </BakaText>
          <BakaText variant={"title-medium"}>
            Title Medium &mdash; Roboto Medium 16/24 . +0.15
          </BakaText>
          <BakaText variant={"title-small"}>
            Title Small &mdash; Roboto Medium 14/20 . +0.1
          </BakaText>
        </BakaCard>
        <br />
        <BakaCard style={{ padding: 24 }}>
          <BakaText variant={"label-large"}>
            Label Large &mdash; Roboto Medium 14/20 . +0.1
          </BakaText>
          <BakaText variant={"label-medium"}>
            Label Medium &mdash; Roboto Medium 12/16 . +0.5
          </BakaText>
          <BakaText variant={"label-small"}>
            Label Small &mdash; Roboto Medium 11/16 . +0.5
          </BakaText>
        </BakaCard>
        <br />
        <BakaCard style={{ padding: 24 }}>
          <BakaText variant={"body-large"}>
            Body Large &mdash; Roboto 16/24 . +0.5
          </BakaText>
          <BakaText variant={"body-medium"}>
            Body Medium &mdash; Roboto 14/20 . +0.25
          </BakaText>
          <BakaText variant={"body-small"}>
            Body Small &mdash; Roboto 12/16 . +0.4
          </BakaText>
        </BakaCard>
      </>
    );
  },
};

export const Heading = {
  render: (props: BakaTextProps) => {
    return (
      <BakaText {...props}>
        {(() => {
          switch (props.variant) {
            case "display-large":
              return (
                <>
                  Display Large <br /> Roboto 57/64 -0.25
                </>
              );
            case "display-medium":
              return (
                <>
                  Display Medium <br /> Roboto 45/52 . 0
                </>
              );
            case "display-small":
              return (
                <>
                  Display Small <br /> Roboto 36/44 . 0
                </>
              );
            case "headline-large":
              return (
                <>
                  Headline Large <br /> Roboto 32/40 . 0
                </>
              );
            case "headline-medium":
              return (
                <>
                  Headline Medium <br /> Roboto 28/36 . 0
                </>
              );
            case "headline-small":
              return (
                <>
                  Headline Small <br /> Roboto 24/32 . 0
                </>
              );
            default:
              return "Text";
          }
        })()}
      </BakaText>
    );
  },
  args: {
    variant: "display-medium",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: [
        "display-large",
        "display-medium",
        "display-small",
        "headline-large",
        "headline-medium",
        "headline-small",
      ],
    },
  },
};

export const Label = {
  render: (props: BakaTextProps) => {
    return (
      <BakaText {...props}>
        {(() => {
          switch (props.variant) {
            case "title-large":
              return (
                <>
                  Title Large
                  <br />
                  Roboto Regular 22/28 . 0
                </>
              );
            case "title-medium":
              return (
                <>
                  Title Medium
                  <br />
                  Roboto Medium 16/24 . +0.15
                </>
              );
            case "title-small":
              return (
                <>
                  Title Small
                  <br />
                  Roboto Medium 14/20 . +0.1
                </>
              );
            case "label-large":
              return (
                <>
                  Label Large
                  <br />
                  Roboto Medium 14/20 . +0.1
                </>
              );
            case "label-medium":
              return (
                <>
                  Label Medium
                  <br />
                  Roboto Medium 12/16 . +0.5
                </>
              );
            case "label-small":
              return (
                <>
                  Label Small
                  <br />
                  Roboto Medium 11/16 . +0.5
                </>
              );
            case "body-large":
              return (
                <>
                  Body Large
                  <br />
                  Roboto 16/24 . +0.5
                </>
              );
            case "body-medium":
              return (
                <>
                  Body Medium
                  <br />
                  Roboto 14/20 . +0.25
                </>
              );
            case "body-small":
              return (
                <>
                  Body Small
                  <br />
                  Roboto 12/16 . +0.4
                </>
              );
            default:
              return "Text";
          }
        })()}
      </BakaText>
    );
  },
  args: {
    variant: "label-medium",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: [
        "title-large",
        "title-medium",
        "title-small",
        "label-large",
        "label-medium",
        "label-small",
        "body-large",
        "body-medium",
        "body-small",
      ],
    },
  },
};

export const Text = {
  render: (props: BakaTextProps) => {
    return (
      <BakaText {...props}>
        {(() => {
          switch (props.variant) {
            case "title-large":
              return (
                <>
                  Title Large
                  <br />
                  Roboto Regular 22/28 . 0
                </>
              );
            case "title-medium":
              return (
                <>
                  Title Medium
                  <br />
                  Roboto Medium 16/24 . +0.15
                </>
              );
            case "title-small":
              return (
                <>
                  Title Small
                  <br />
                  Roboto Medium 14/20 . +0.1
                </>
              );
            case "label-large":
              return (
                <>
                  Label Large
                  <br />
                  Roboto Medium 14/20 . +0.1
                </>
              );
            case "label-medium":
              return (
                <>
                  Label Medium
                  <br />
                  Roboto Medium 12/16 . +0.5
                </>
              );
            case "label-small":
              return (
                <>
                  Label Small
                  <br />
                  Roboto Medium 11/16 . +0.5
                </>
              );
            case "body-large":
              return (
                <>
                  Body Large
                  <br />
                  Roboto 16/24 . +0.5
                </>
              );
            case "body-medium":
              return (
                <>
                  Body Medium
                  <br />
                  Roboto 14/20 . +0.25
                </>
              );
            case "body-small":
              return (
                <>
                  Body Small
                  <br />
                  Roboto 12/16 . +0.4
                </>
              );
            default:
              return "Text";
          }
        })()}
      </BakaText>
    );
  },
  args: {
    variant: "label-medium",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: [
        "title-large",
        "title-medium",
        "title-small",
        "label-large",
        "label-medium",
        "label-small",
        "body-large",
        "body-medium",
        "body-small",
      ],
    },
  },
};

export const Paragraph = {
  render(props: BakaTextProps) {
    return (
      <BakaText {...props}>
        {(() => {
          switch (props.variant) {
            case "body-large":
              return (
                <>
                  Body Large
                  <br />
                  Roboto 16/24 . +0.5
                </>
              );
            case "body-medium":
              return (
                <>
                  Body Medium
                  <br />
                  Roboto 14/20 . +0.25
                </>
              );
            case "body-small":
              return (
                <>
                  Body Small
                  <br />
                  Roboto 12/16 . +0.4
                </>
              );
            default:
              return "Text";
          }
        })()}
      </BakaText>
    );
  },
  args: {
    variant: "body-medium",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["body-large", "body-medium", "body-small"],
    },
  },
};
