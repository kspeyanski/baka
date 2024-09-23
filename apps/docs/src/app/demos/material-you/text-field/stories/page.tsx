import {
  Button,
  Icon,
  Input,
  Text,
  TextField,
  TextFieldProps,
} from "baka-material-you";

export type TextFieldStoryProps = TextFieldProps & {
  value: string;
  placeholder: boolean;
  label: boolean;
  leadingIcon: boolean;
  trailingIcon: boolean;
  state: "" | "hovered" | "focused" | "invalid" | "disabled";
};
export const defaultProps = {
  value: "",
  placeholder: true,
  label: true,
  leadingIcon: true,
  trailingIcon: true,
  state: "",
};

export default function TextFieldStory(props: TextFieldStoryProps) {
  const { value, placeholder, label, leadingIcon, trailingIcon, state, ...other } = props;

  return (
    <TextField {...other} {...(state ? { [state]: true } : {})}>
      {leadingIcon && <Icon>search</Icon>}
      {label && <Text variant="label-medium">Label</Text>}
      <Input
        {...(placeholder && { placeholder: "Placeholder" })}
        value={value}
        state={{empty: !value}}
        readOnly={true}
      />
      {trailingIcon &&
        (state === "invalid" ? (
          <Button variant={["icon"]}>
            <Icon variant={["filled", "error"]}>error</Icon>
          </Button>
        ) : (
          <Button variant={"icon"}>
            <Icon>cancel</Icon>
          </Button>
        ))}
    </TextField>
  );
}
