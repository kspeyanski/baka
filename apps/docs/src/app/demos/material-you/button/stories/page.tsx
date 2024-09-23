import { Button, ButtonProps } from "baka-material-you";

export type ButtonStoryProps = ButtonProps & {
  children?: React.ReactNode;
};
export const defaultProps: ButtonStoryProps = {
  state: {
    hovered: false,
    focused: false,
    pressed: false,
    disabled: false,
  },
  children: "Label",
};

export default function ButtonStory(props: ButtonStoryProps) {
  const { children, ...other } = { ...defaultProps, ...props };
  return <Button {...other}>{children}</Button>;
}
