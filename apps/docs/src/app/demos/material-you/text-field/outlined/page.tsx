import { TextField, Icon, Text, Input, Button } from "baka-material-you";

export default function FilledTextFieldDemo() {
  return (
    <div className="flex gap-4 flex-col">
      <TextField variant={"outlined"} style={{ width: 300 }}>
        <Icon>search</Icon>
        <Text>Label</Text>
        <Input defaultValue="Placeholder" />
        <Button variant={["icon"]}>
          <Icon variant={["filled"]}>clear</Icon>
        </Button>
      </TextField>
      <TextField variant={"outlined"} style={{ width: 300 }} state={{focused: true}}>
        <Icon>search</Icon>
        <Text>Label</Text>
        <Input defaultValue="Placeholder" />
        <Button variant={["icon"]}>
          <Icon variant={["filled"]}>clear</Icon>
        </Button>
      </TextField>
      <TextField variant={"outlined"} style={{ width: 300 }} state={{invalid: true}}>
        <Icon>search</Icon>
        <Text>Label</Text>
        <Input defaultValue="Placeholder" />
        <Button variant={["icon"]}>
          <Icon variant={["filled"]}>clear</Icon>
        </Button>
      </TextField>
      <TextField variant={"outlined"} style={{ width: 300 }} state={{disabled: true}}>
        <Icon>search</Icon>
        <Text>Label</Text>
        <Input defaultValue="Placeholder" />
        <Button variant={["icon"]}>
          <Icon variant={["filled"]}>clear</Icon>
        </Button>
      </TextField>
    </div>
  );
}
