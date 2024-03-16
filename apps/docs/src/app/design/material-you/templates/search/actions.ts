"use server";
import flexsearch from "flexsearch";

import { allDocs } from "contentlayer/generated";
const index = new flexsearch.Document({
  optimize: true,
  resolution: 9,
  document: {
    id: "slug",
    store: true,
    index: [
      { field: "title", tokenize: "forward" },
      //   {
      //     field: "content",
      //     tokenize: "strict",
      //     context: {
      //       depth: 1,
      //       resolution: 3,
      //     },
      //   },
    ],
  },
});

const docs = allDocs.map((doc) => {
  console.log(doc.group);
  index.add(doc._raw.flattenedPath, {
    slug: doc._raw.flattenedPath,
    title: doc.title,
    group: doc.group?.title,
  });
});

export async function search(query: string) {
  const result = await index.search(query, {
    limit: 10,
    enrich: true,
  });
  return result?.[0]?.result;
}
