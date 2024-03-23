import clsx from "clsx";

export const OL = (props: React.HTMLAttributes<HTMLOListElement>) => (
  <ol {...props} className={clsx("ol", props.className)} />
);
