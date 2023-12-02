import { BakaComponent } from "baka-ui";
import clsx from "clsx";

export type CodeProps = React.HTMLAttributes<HTMLElement> & {};

export const Code: BakaComponent<"code", CodeProps> = async (props) => {
  return <code {...props} className={clsx(props.className, "code")} />;
};
