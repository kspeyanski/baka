import React from "react";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import highlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { Text } from "@fluent-ui/components/text";

import { notFound } from "next/navigation";

import { allDocs } from "contentlayer/generated";
// import { Text } from "@/components/text";
// import { Pre } from "@/components/code/pre";
// import { Code } from "@/components/code/code";
// import { Column } from "@/components/layout/column";
// import { TableOfContents } from "@material-you/templates/table-of-contents";
// import { Table } from "@/components/table/table";
// import { TableRow } from "@/components/table/table-row";
// import { TableCell } from "@/components/table/table-cell";
// import { TableHeaderCell } from "@/components/table/table-header-cell";
// import { UL } from "@/components/misc/ul";
// import { LI } from "@/components/misc/li";

// import { Demo } from "../templates/demo";
// import { OL } from "@/components/misc/ol";
// import { Container } from "@/components/layout/container";
// import { Row } from "@/components/layout/row";

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h2" />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h2" />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h3" />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h4" />
  ),
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h5" />
  ),
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h6" />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Text as="p" {...props} />
  ),
  // table: Table,
  // tr: TableRow,
  // td: TableCell,
  // th: TableHeaderCell,
  // pre: Pre,
  // code: Code,
  // ul: UL,
  // ol: OL,
  // li: LI,
  Demo: () => <div>TODO: demo</div>,
};

export const dynamic = "force-static";

export default async function FluentUIPage(props: {
  params?: { slug?: string[] };
}) {
  const slug = props.params?.slug?.join("/") ?? "";

  const doc = allDocs.find(
    (doc) =>
      doc._raw.flattenedPath === "design/fluent-ui" + (slug ? `/${slug}` : "")
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
      {/* <Container>
        <Row>
          <Column columns={12} className="pt-[45px] pb-[100px]"> */}
      <article className="w-[100%]">
        <React.Suspense fallback={<div>loading</div>}>
          <MDXContent components={mdxComponents} />
        </React.Suspense>
      </article>
      {/* </Column>
          </Row>
        </Container> */}
      <div className="pt-[45px] w-[228px] hidden xl:flex sticky top-[100px] h-[calc(100vh-100px)]">
        TOC
        {/* <TableOfContents data={doc.toc} /> */}
      </div>
    </>
  );
}

export const generateStaticParams = async () => {
  return allDocs
    .filter((doc) => doc._raw.flattenedPath.startsWith("design/fluent-ui"))
    .map((doc) => {
      return {
        slug: doc._raw.flattenedPath
          .replace("design/fluent-ui/", "")
          .split("/"),
      };
    });
};
