import clsx from "clsx";

export const UL = (props: React.HTMLAttributes<HTMLUListElement>) => (
  <ul {...props} className={clsx("ul", props.className)} />
);
