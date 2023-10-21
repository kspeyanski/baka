/// <reference types="baka-material-you" />

import { BakaColumn, BakaContainer, BakaRow, BakaText } from "baka-ui";
import type { Meta } from "@storybook/react";
import Docs from "./layout.mdx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Material You/Primitives/Layout",
  component: (props) => <BakaText {...props} />,
  render: (props) => {
    return <BakaText {...props} />;
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
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
  render: (props) => {
    return (
      <div style={{ height: "100vh" }}>
        <BakaContainer>
          <BakaRow>
            {Array.from({ length: props.columns }).map((_, index) => (
              <BakaColumn count={props.size} style={{ background: "#E0F0F0" }}></BakaColumn>
            ))}
          </BakaRow>
        </BakaContainer>
      </div>
    );
  },
  args: {
    columns: 4,
    size: 3,
  },
  argTypes: {
    columns: {
      control: {
        type: "range",
        min: 1,
        max: 12,
      },
    },
    size: {
      control: {
        type: "range",
        min: 1,
        max: 12,
      },
    },
  },
};
