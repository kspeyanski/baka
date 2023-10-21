/// <reference types="baka-material-you" />

import {
  BakaCard,
  BakaHeading,
  BakaHeadingProps,
  BakaLabel,
  BakaLabelProps,
  BakaParagraph,
  BakaParagraphProps,
  BakaText,
  BakaTextProps,
} from "baka-ui";
import type { Meta } from "@storybook/react";
import Docs from "./typography.mdx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Material You/Primitives/Typography",
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
          <BakaHeading variant={"display-large"}>
            Display Large &mdash; Roboto 57/64 -0.25
          </BakaHeading>
          <BakaHeading variant={"display-medium"}>
            Display Medium &mdash; Roboto 45/52 . 0
          </BakaHeading>
          <BakaHeading variant={"display-small"}>
            Display Small &mdash; Roboto 36/44 . 0
          </BakaHeading>
        </BakaCard>
        <br />
        <BakaCard style={{ padding: 24 }}>
          <BakaHeading variant={"headline-large"}>
            Headline Large &mdash; Roboto 32/40 . 0
          </BakaHeading>
          <BakaHeading variant={"headline-medium"}>
            Headline Medium &mdash; Roboto 28/36 . 0
          </BakaHeading>
          <BakaHeading variant={"headline-small"}>
            Headline Small &mdash; Roboto 24/32 . 0
          </BakaHeading>
        </BakaCard>
        <br />
        <BakaCard style={{ padding: 24 }}>
          <BakaLabel variant={"title-large"}>
            Title Large &mdash; Roboto Regular 22/28 . 0
          </BakaLabel>
          <BakaLabel variant={"title-medium"}>
            Title Medium &mdash; Roboto Medium 16/24 . +0.15
          </BakaLabel>
          <BakaLabel variant={"title-small"}>
            Title Small &mdash; Roboto Medium 14/20 . +0.1
          </BakaLabel>
        </BakaCard>
        <br />
        <BakaCard style={{ padding: 24 }}>
          <BakaLabel variant={"label-large"}>
            Label Large &mdash; Roboto Medium 14/20 . +0.1
          </BakaLabel>
          <BakaLabel variant={"label-medium"}>
            Label Medium &mdash; Roboto Medium 12/16 . +0.5
          </BakaLabel>
          <BakaLabel variant={"label-small"}>
            Label Small &mdash; Roboto Medium 11/16 . +0.5
          </BakaLabel>
        </BakaCard>
        <br />
        <BakaCard style={{ padding: 24 }}>
          <BakaParagraph variant={"body-large"}>
            Body Large &mdash; Roboto 16/24 . +0.5
          </BakaParagraph>
          <BakaParagraph variant={"body-medium"}>
            Body Medium &mdash; Roboto 14/20 . +0.25
          </BakaParagraph>
          <BakaParagraph variant={"body-small"}>
            Body Small &mdash; Roboto 12/16 . +0.4
          </BakaParagraph>
        </BakaCard>
      </>
    );
  },
};

export const Heading = {
  render: (props: BakaHeadingProps) => {
    return (
      <BakaHeading {...props}>
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
      </BakaHeading>
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
  render: (props: BakaLabelProps) => {
    return (
      <BakaLabel {...props}>
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
      </BakaLabel>
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
  render(props: BakaParagraphProps) {
    return (
      <BakaParagraph {...props}>
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
      </BakaParagraph>
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
