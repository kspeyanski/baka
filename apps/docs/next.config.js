/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const withMDX = require("@next/mdx")();

const nextConfig = withContentlayer(
  withMDX({
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
            { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
            {
              key: "Access-Control-Allow-Headers",
              value:
                "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
            },
          ],
        },
      ];
    },
  })
);

module.exports = nextConfig;
