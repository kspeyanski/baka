"use client";
import Link, {type LinkProps} from "next/link";

export const StorybookLink = (props: LinkProps) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  return <Link {...props} onClick={handleClick} target="_blank" />;
};
