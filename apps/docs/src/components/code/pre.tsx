import { BakaComponent } from "baka-ui";
import clsx from "clsx";

export type PreProps = React.HTMLAttributes<HTMLPreElement> & {};

export const Pre: BakaComponent<"pre", PreProps> = (props) => {
  return <pre {...props} className={clsx(props.className, "pre")} />;
};
