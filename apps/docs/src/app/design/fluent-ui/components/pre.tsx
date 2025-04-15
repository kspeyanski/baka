import clsx from "clsx";
import classNames from "./pre.module.scss";
import { Baka, BakaProps, modulesClassNames } from "baka-ui";

export type PreProps = BakaProps<"pre"> & {};

export const Pre = (props: PreProps) => {
  return (
    <Baka
      {...props}
      as="pre"
      className={clsx(props.className, modulesClassNames("pre", classNames))}
      baka="pre"
    />
  );
};
