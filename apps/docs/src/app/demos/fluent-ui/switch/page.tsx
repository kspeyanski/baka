import { BakaSwitch } from "baka-ui";

export default function SwitchDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <BakaSwitch name="unchecked" />
        <BakaSwitch name="unchecked" hover />
        <BakaSwitch name="unchecked" pressed />
        <BakaSwitch name="unchecked" disabled />
        <BakaSwitch name="unchecked" focus />
      </div>
      <div className="flex gap-6">
        <BakaSwitch name="checked" checked />
        <BakaSwitch name="checked" checked hover />
        <BakaSwitch name="checked" checked pressed />
        <BakaSwitch name="checked" checked disabled />
        <BakaSwitch name="checked" checked focus />
      </div>
    </div>
  );
}
