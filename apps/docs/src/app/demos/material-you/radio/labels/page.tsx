import { Radio, Text } from "baka-material-you";

export default function RadioWithLabels() {
  return (
    <div style={{ display: "flex", gap: 16, flexDirection: "column" }}>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Radio id="apple" name="fruit" value="apple" />
        <Text as="label" htmlFor="apple">
          Apple
        </Text>
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Radio id="banana" name="fruit" value="banana" />
        <Text as="label" htmlFor="banana">
          Banana
        </Text>
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Radio id="cherry" name="fruit" value="cherry" />
        <Text as="label" htmlFor="cherry">
          Cherry
        </Text>
      </div>
    </div>
  );
}
