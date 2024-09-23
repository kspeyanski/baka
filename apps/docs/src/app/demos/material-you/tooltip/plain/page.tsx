import { Button, Text, Tooltip } from "baka-material-you";

export default function PlainTooltipDemo() {
  return (
    <div style={{ display: "grid", gridRowGap: 16, alignItems: "center", justifyItems: "center" }}>
      <Tooltip variant={"plain"}>Supporting text</Tooltip>
      <Tooltip variant={"plain"} style={{ width: 312 }}>
        Supporting text Body text string goes here lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt
      </Tooltip>
    </div>
  );
}
