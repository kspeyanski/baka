import { Radio } from "baka-material-you";

export default function RadioDemo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <div style={{ display: "flex", gap: 48 }}>
        <Radio defaultChecked={true} />
        <Radio defaultChecked={true} state={{ hovered: true }} />
        <Radio defaultChecked={true} state={{ focused: true }} />
        <Radio defaultChecked={true} state={{ pressed: true }} />
        <Radio defaultChecked={true} state={{disabled: true}} />
      </div>
      <div style={{ display: "flex", gap: 48 }}>
        <Radio />
        <Radio state={{ hovered: true }} />
        <Radio state={{ focused: true }} />
        <Radio state={{ pressed: true }} />
        <Radio state={{disabled: true}} />
      </div>
    </div>
  );
}
