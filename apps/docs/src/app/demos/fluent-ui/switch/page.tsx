import { BakaSwitch } from "baka-ui";

export default function SwitchDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <BakaSwitch name="unchecked" />
        <BakaSwitch name="unchecked" hovered />
        <BakaSwitch name="unchecked" activated />
        <BakaSwitch name="unchecked" disabled />
        <BakaSwitch name="unchecked" focused />
      </div>
      <div className="flex gap-6">
        <BakaSwitch name="checked" checked />
        <BakaSwitch name="checked" checked hovered />
        <BakaSwitch name="checked" checked activated />
        <BakaSwitch name="checked" checked disabled />
        <BakaSwitch name="checked" checked focused />
      </div>
    </div>
  );
}
