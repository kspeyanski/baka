import React from "react";
import clsx from "clsx";

export type CodeProps = React.HTMLAttributes<HTMLElement> & {};

export const Code = (props: CodeProps) => {
  return <code {...props} className={clsx(props.className, "code")} />;
};
