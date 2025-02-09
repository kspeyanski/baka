import clsx from "clsx";

export const LI = (props: React.HTMLAttributes<HTMLLIElement>) => (
  <li {...props} className={clsx("li", props.className)} />
);
