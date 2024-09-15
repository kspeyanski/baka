import { Switch } from "baka-fluent-ui";

export default function SwitchDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <Switch name="unchecked" checked={false} />
        <Switch name="unchecked" checked={false} state={{ hover: true }} />
        <Switch name="unchecked" checked={false} state={{ pressed: true }} />
        <Switch name="unchecked" checked={false} state={{ disabled: true }} />
        <Switch name="unchecked" checked={false} state={{ focus: true }} />
      </div>
      <div className="flex gap-6">
        <Switch name="checked" checked state={{ checked: true }} />
        <Switch name="checked" checked state={{ checked: true, hover: true }} />
        <Switch
          name="checked"
          checked
          state={{ checked: true, pressed: true }}
        />
        <Switch
          name="checked"
          checked
          state={{ checked: true, disabled: true }}
        />
        <Switch name="checked" checked state={{ checked: true, focus: true }} />
      </div>
    </div>
  );
}
