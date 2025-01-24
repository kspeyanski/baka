import clsx from "clsx";
import React from "react";

export type PreProps = React.HTMLAttributes<HTMLPreElement> & {};

export const Pre = (props: PreProps) => {
  return <pre {...props} className={clsx(props.className, "pre")} />;
};
