import React from "react";
import { notFound } from "next/navigation";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import highlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

import { allDocs } from "contentlayer/generated";
import { Text } from "@material-you/components/text";
import { Pre } from "@material-you/components/code/pre";
import { Code } from "@material-you/components/code/code";
import { Column } from "@material-you/components/layout/column";
import { TableOfContents } from "@material-you/templates/table-of-contents";
import { Table } from "@material-you/components/table/table";
import { TableRow } from "@material-you/components/table/table-row";
import { TableCell } from "@material-you/components/table/table-cell";
import { TableHeaderCell } from "@material-you/components/table/table-header-cell";
import { UL } from "@material-you/components/misc/ul";
import { LI } from "@material-you/components/misc/li";
import { OL } from "@material-you/components/misc/ol";

import { Demo } from "@material-you/templates/demo";

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h2" variant={["display-medium", "article"]} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h2" variant={["display-small", "article"]} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h3" variant={["headline-large", "article"]} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h4" variant={["headline-medium", "article"]} />
  ),
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h5" variant={["headline-small", "article"]} />
  ),
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h6" variant={["title-large", "article"]} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Text as="p" {...props} variant={["body-large", "article"]} />
  ),
  table: Table,
  tr: TableRow,
  td: TableCell,
  th: TableHeaderCell,
  pre: Pre,
  code: Code,
  ul: UL,
  ol: OL,
  li: LI,
  Demo: Demo,
};

export const dynamic = "force-static";

export default async function MaterialYouPage(props: {
  params?: { slug?: string[] };
}) {
  const slug = (await props.params)?.slug?.join("/") ?? "";

  const doc = allDocs.find(
    (doc) =>
      doc._raw.flattenedPath ===
      "design/material-you" + (slug ? `/${slug}` : "")
  );

  if (!doc) {
    notFound();
  }

  const mdx = await compile(doc.body.raw, {
    outputFormat: "function-body",
    rehypePlugins: [rehypeSlug, highlight],
    remarkPlugins: [remarkGfm],
  });
  const { default: MDXContent } = await run(mdx, { ...runtime });

  return (
    <>
      <Column columns={[8, 8, 8, 8]} className="pb-[100px]">
        <article className="w-[100%]">
          <React.Suspense fallback={<div>loading</div>}>
            <MDXContent components={mdxComponents} />
          </React.Suspense>
        </article>
      </Column>
      <Column
        columns={[4, 3, 2, 4]}
        className="hidden md:flex sticky top-[100px] h-[calc(100vh-100px)]"
      >
        <TableOfContents data={doc.toc} />
      </Column>
    </>
  );
}

export const generateStaticParams = async () => {
  return allDocs
    .filter((doc) => doc._raw.flattenedPath.startsWith("design/material-you"))
    .map((doc) => {
      return {
        slug: doc._raw.flattenedPath
          .replace("design/material-you/", "")
          .split("/"),
      };
    });
};
