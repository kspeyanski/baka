import { Bar, BarProps } from "baka-material-you";
import clsx from "clsx";

export type TopBarProps = BarProps;

export const TopBar: typeof Bar = (props) => {
  return (
    <Bar
      {...props}
      className={clsx("top-bar", props.className)}
      variant={"top"}
    />
  );
};
