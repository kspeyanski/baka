import PlainTooltipDemo from "./plain/page";
import RichTooltipDemo from "./rich/page";

export default function TooltipDemo() {
  return (
    <div
      style={{
        display: "grid",
        gridRowGap: 32,
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <PlainTooltipDemo />
      <RichTooltipDemo />
    </div>
  );
}
