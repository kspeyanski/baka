import { Label } from "baka-fluent-ui";

export default function LabelDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-6">
        <Label>Label</Label>
        <Label state={{ disabled: true }}>Label</Label>
      </div>
      <div className="flex gap-6">
        <Label variant={"medium"}>Label</Label>
        <Label variant={"medium"} state={{ disabled: true }}>
          Label
        </Label>
      </div>
      <div className="flex gap-6">
        <Label variant={"semibold"}>Label</Label>
        <Label variant={"semibold"} state={{ disabled: true }}>
          Label
        </Label>
      </div>
      <div className="flex gap-6">
        <Label variant={["semibold", "medium"]}>Label</Label>
        <Label variant={["semibold", "medium"]} state={{ disabled: true }}>
          Label
        </Label>
      </div>
      <div className="flex gap-6">
        <Label variant={["semibold", "large"]}>Label</Label>
        <Label variant={["semibold", "large"]} state={{ disabled: true }}>
          Label
        </Label>
      </div>
    </div>
  );
}
