import { Checkbox, CheckboxProps } from "baka-material-you";

export type CheckboxStoryProps = CheckboxProps & {};

export const defaultProps: CheckboxStoryProps = {
  variant: "primary",
  state: {
    indeterminate: false,
    hovered: false,
    focused: false,
    pressed: false,
    disabled: false,
  },
};

export default function CheckboxStory(props: CheckboxStoryProps) {
  return <Checkbox {...props} />;
}
