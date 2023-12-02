import fs from "fs";
import p from "path";
import highlight from "rehype-highlight";

import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Docs = defineDocumentType(() => ({
  name: "Docs",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    position: { type: "number" },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (docs) => {
        return `/docs/${docs._raw.flattenedPath}`;
      },
    },
    group: {
      type: "string",
      resolve: (docs) => {
        const folder = p.join("data", p.dirname(docs._raw.sourceFilePath));
        const path = p.join(folder, "meta.json");
        if (fs.existsSync(path)) {
          const meta = JSON.parse(fs.readFileSync(path, "utf8"));
          return meta.title;
        } else {
          return null;
        }
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "./data",
  documentTypes: [Docs],
  mdx: {
    // @ts-expect-error
    rehypePlugins: [highlight],
  },
});
