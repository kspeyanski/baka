import fs from "fs";
import p from "path";
import highlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";
import remarkGfm from "remark-gfm";

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
    toc: {
      type: "json",
      resolve: async (doc) => {
        const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        // @ts-expect-error
        const toc = Array.from(doc.body.raw.matchAll(regXHeader)).map(({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            level: flag.length,
            text: content,
            slug: content ? slugger.slug(content) : undefined,
          };
        });
        return toc;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "./data",
  documentTypes: [Docs],
  mdx: {
    remarkPlugins: [remarkGfm],
    // @ts-expect-error
    rehypePlugins: [highlight, rehypeSlug],
  },
});
