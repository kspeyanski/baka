import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

import { allDocs } from "contentlayer/generated";
import { Heading, Paragraph, Text } from "@/components/typography";
import { Pre } from "@/components/code/pre";
import { Code } from "@/components/code/code";
import { Column } from "@/components/layout/column";
import { TableOfContents } from "@/templates/table-of-contents";
import { Table } from "@/components/table/table";
import { TableRow } from "@/components/table/table-row";
import { TableCell } from "@/components/table/table-cell";
import { TableHeaderCell } from "@/components/table/table-header-cell";
import { UL } from "@/components/misc/ul";
import { LI } from "@/components/misc/li";

import { Demo } from "../templates/demo";

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading {...props} as="h2" variant={["display-medium", "article"]} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading {...props} as="h2" variant={["display-small", "article"]} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading {...props} as="h2" variant={["headline-large", "article"]} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading {...props} as="h2" variant={["headline-medium", "article"]} />
  ),
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading {...props} as="h2" variant={["headline-small", "article"]} />
  ),
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text {...props} as="h2" variant={["title-large", "article"]} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Paragraph {...props} variant={["body-large", "article"]} />
  ),
  table: Table,
  tr: TableRow,
  td: TableCell,
  th: TableHeaderCell,
  pre: Pre,
  code: Code,
  ul: UL,
  li: LI,
  Demo: Demo,
};

export default function MaterialYouPage(props: { params?: { slug?: string[] } }) {
  const slug = props.params?.slug?.join("/") ?? "";

  const doc = allDocs.find(
    (doc) => doc._raw.flattenedPath === "design/material-you" + (slug ? `/${slug}` : "")
  );

  if (!doc) {
    notFound();
  }

  const MDXContent = useMDXComponent(doc.body.code);

  return (
    <>
      <Column count={[8, 9, 10]} className="pt-[45px]">
        <article className="max-w-[100%] min-h-[calc(100vh-105px)]">
          <React.Suspense fallback={<div>loading</div>}>
            <MDXContent components={mdxComponents} />
          </React.Suspense>
        </article>
      </Column>
      <Column count={[4, 3, 2]} className="hidden lg:flex sticky top-[100px] h-[calc(100%-100px)]">
        <TableOfContents data={doc.toc} />
      </Column>
    </>
  );
}
