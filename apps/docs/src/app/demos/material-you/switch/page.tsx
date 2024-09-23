import { Switch } from "baka-material-you";

export default function SwitchDemo() {
  return (
    <div style={{ display: "flex", gap: 32, flexDirection: "column" }}>
      <div style={{ display: "flex", gap: 32 }}>
        <Switch defaultChecked={true} />
        <Switch defaultChecked={true} state={{ hovered: true }} />
        <Switch defaultChecked={true} state={{ focused: true }} />
        <Switch defaultChecked={true} state={{ pressed: true }} />
        <Switch defaultChecked={true} state={{ disabled: true }} />
      </div>
      <div style={{ display: "flex", gap: 32 }}>
        <Switch variant="icon" defaultChecked={true} />
        <Switch
          variant="icon"
          defaultChecked={true}
          state={{ hovered: true }}
        />
        <Switch
          variant="icon"
          defaultChecked={true}
          state={{ focused: true }}
        />
        <Switch
          variant="icon"
          defaultChecked={true}
          state={{ pressed: true }}
        />
        <Switch
          variant="icon"
          defaultChecked={true}
          state={{ disabled: true }}
        />
      </div>
      <div style={{ display: "flex", gap: 32 }}>
        <Switch />
        <Switch state={{ hovered: true }} />
        <Switch state={{ focused: true }} />
        <Switch state={{ pressed: true }} />
        <Switch state={{ disabled: true }} />
      </div>
      <div style={{ display: "flex", gap: 32 }}>
        <Switch variant="icon" />
        <Switch variant="icon" state={{ hovered: true }} />
        <Switch variant="icon" state={{ focused: true }} />
        <Switch variant="icon" state={{ pressed: true }} />
        <Switch variant="icon" state={{ disabled: true }} />
      </div>
    </div>
  );
}
