import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";
import withMDX from "@next/mdx";

const config: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  redirects: async () => {
    return [
      {
        permanent: true,
        source: "/storybook",
        destination: "/storybook/index.html",
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.inline-svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            inlineStyles: false,
          },
        },
      ],
    });
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    logger: console.log,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

export default withContentlayer(withMDX()(config));
