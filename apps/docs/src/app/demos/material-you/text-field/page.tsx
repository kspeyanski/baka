import { Button, Icon, Input, Text, TextField } from "baka-material-you";

export default async function App() {
  const args = {};
  return (
    <div className="flex gap-4 flex-col">
      <div className="flex gap-4">
        <TextField style={{ width: 300 }}>
          <Icon>search</Icon>
          <Text>Label</Text>
          <Input defaultValue="Placeholder" />
          <Button variant={["icon"]}>
            <Icon variant={["filled"]}>clear</Icon>
          </Button>
        </TextField>
        <TextField style={{ width: 300 }} state={{invalid: true}}>
          <Icon>search</Icon>
          <Text>Label</Text>
          <Input defaultValue="Invalid" />
          <Button variant={["icon"]}>
            <Icon variant={["filled", "error"]}>error</Icon>
          </Button>
        </TextField>
      </div>
      <div className="flex gap-4">
        <TextField variant="outlined" style={{ width: 300 }}>
          <Icon>search</Icon>
          <Text>Label</Text>
          <Input defaultValue="Placeholder" />
          <Button variant={["icon"]}>
            <Icon variant={["filled"]}>clear</Icon>
          </Button>
        </TextField>
        <TextField variant="outlined" style={{ width: 300 }} state={{invalid: true}}>
          <Icon>search</Icon>
          <Text>Label</Text>
          <Input defaultValue="Invalid" />
          <Button variant={["icon"]}>
            <Icon variant={["filled", "error"]}>error</Icon>
          </Button>
        </TextField>
      </div>
    </div>
  );
}
