import { Radio } from "baka-fluent-ui";

export default function RadioDemo() {
  return (
    <>
      <div>
        <Radio name="unchecked" />
        <Radio name="unchecked" state={{ hover: true }} />
        <Radio name="unchecked" state={{ pressed: true }} />
        <Radio name="unchecked" state={{ disabled: true }} />
        <Radio name="unchecked" state={{ focus: true }} />
      </div>
      <div>
        <Radio name="checked" checked state={{ checked: true }} />
        <Radio name="checked" checked state={{ checked: true, hover: true }} />
        <Radio
          name="checked"
          checked
          state={{ checked: true, pressed: true }}
        />
        <Radio
          name="checked"
          checked
          state={{ checked: true, disabled: true }}
        />
        <Radio name="checked" checked state={{ checked: true, focus: true }} />
      </div>
    </>
  );
}
