import { Label, Text } from "@/components/typography";
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
    <div className="flex flex-col gap-md">
      <Label className="text-primary">On this page</Label>

      <ul className="flex flex-col gap-sm">
        {data.map((item) =>
          item.level > 1 ? (
            <li key={item.slug}>
              <Text
                as={Link}
                href={`#${item.slug}`}
                variant={"title-small"}
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
