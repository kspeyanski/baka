import React from "react";
import type { Preview } from "@storybook/react";
import "../src/styles/material-you.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Material You", ["Overview", "*"]],
        locales: "en-US",
      },
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        name: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "Light (default)" },
          { value: "dark", icon: "moon", title: "Dark" },
        ],
        // Property that specifies if the name of the item will be displayed
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;
      document.body.setAttribute("data-theme", theme);
      return <Story />;
    },
    (Story) => (
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <Story />
      </>
    ),
  ],
};

export default preview;
