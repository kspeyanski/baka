import { Switch, SwitchProps } from "baka-material-you";

export type SwitchStoryProps = SwitchProps & {};

export const defaultProps: SwitchStoryProps = {
  variant: undefined,
  state: {
    hovered: false,
    focused: false,
    pressed: false,
    disabled: false,
    selected: false,
  },
};

export default function SwitchStory(props: SwitchStoryProps) {
  const { variant, ...other } = { ...defaultProps, ...props };

  return (
    <Switch {...other} checked={other.state?.selected} variant={variant} />
  );
}
