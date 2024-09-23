import { Avatar, Chip, ChipProps, Icon } from "baka-material-you";

export type ChipStoryProps = ChipProps & {
  variant?: "elevated";
  leadingIcon?: boolean;
  trailingIcon?: boolean;
  avatar?: boolean;
};

export const defaultProps: ChipStoryProps = {
  variant: "normal" as any,
  leadingIcon: false,
  trailingIcon: false,
  state: {
    hovered: false,
    focused: false,
    pressed: false,
    dragged: false,
    selected: false,
  },
  avatar: false,
};

export default function ChipStory(props: ChipStoryProps) {
  const { leadingIcon, trailingIcon, avatar, variant, ...other } = {
    ...defaultProps,
    ...props,
  };

  return (
    <Chip {...other} variant={variant}>
      {leadingIcon && <Icon variant={"primary"}>local_taxi</Icon>}
      {avatar && (
        <Avatar>
          {props.state?.selected ? (
            <Icon variant={["filled"]}>check</Icon>
          ) : (
            <img src="./avatar-light.svg" />
          )}
        </Avatar>
      )}
      {!avatar && props.state?.selected && (
        <Avatar>
          <Icon variant={["filled"]}>check</Icon>
        </Avatar>
      )}
      <span>Label</span>
      {trailingIcon && <Icon>close</Icon>}
    </Chip>
  );
}
