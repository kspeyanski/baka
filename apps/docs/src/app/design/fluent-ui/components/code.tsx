import clsx from "clsx";
import classNames from "./code.module.scss";
import { Baka, BakaProps, modulesClassNames } from "baka-ui";

export type CodeProps = BakaProps<"code"> & {};

export const Code = (props: CodeProps) => {
  return (
    <Baka
      {...props}
      as="code"
      className={clsx(props.className, modulesClassNames("code", classNames))}
      baka="code"
    />
  );
};
