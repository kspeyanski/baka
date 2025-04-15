import { Text } from "@fluent-ui/components";
import clsx from "clsx";
import Link from "next/link";

export type TableOfContentsProps = {
  data: Array<{
    level: number;
    text: string;
    slug: string;
  }>;
};

export const TableOfContents = ({ data }: TableOfContentsProps) => {
  return (
    <div className="flex flex-col gap-3">
      <Text variant={"subtitle-2"}>On this page</Text>
      <ul className="flex flex-col gap-1">
        {data.map((item) =>
          item.level > 1 ? (
            <li key={item.slug}>
              <Text
                as={Link}
                href={`#${item.slug}`}
                variant={"body-2"}
                className={clsx(`text-on-surface-variant`)}
              >
                {item.text}
              </Text>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};
