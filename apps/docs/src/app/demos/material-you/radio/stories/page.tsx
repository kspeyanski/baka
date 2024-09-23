import { Radio, RadioProps, Text } from "baka-material-you";

export type RadioStoryProps = RadioProps & {
  label?: boolean;
};

export const defaultProps: RadioStoryProps = {
  label: true,
  checked: false,
  state: {
    hovered: false,
    focused: false,
    pressed: false,
    disabled: false,
    selected: false,
  },
};

export default function RadioStory(props: RadioStoryProps) {
  const { label, ...other } = { ...defaultProps, ...props };

  return label ? (
    <Text
      as="label"
      variant="label-large"
      style={{ display: "flex", gap: 16, alignItems: "center" }}
    >
      <Radio {...other} />
      Label
    </Text>
  ) : (
    <Radio {...other} />
  );
}
