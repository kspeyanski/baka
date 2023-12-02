/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const withMDX = require("@next/mdx")();

const nextConfig = withContentlayer(
  withMDX({
    pageExtensions: ["js", "jsx", "mdx", "md", "ts", "tsx"],
  })
);

module.exports = nextConfig;
