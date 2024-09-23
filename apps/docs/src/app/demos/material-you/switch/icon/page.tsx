import { Switch } from "baka-material-you";

export default function SwitchDemo() {
  return (
    <div style={{ display: "flex", gap: 32, flexDirection: "column" }}>
      <Switch variant="icon" />
      <Switch variant="icon" defaultChecked={true} />
    </div>
  );
}
