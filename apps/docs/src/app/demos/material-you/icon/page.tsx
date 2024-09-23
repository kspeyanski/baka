import { Icon } from "baka-material-you";

export default function IconDemo() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <Icon variant={["small"]}>settings</Icon>
      <Icon variant={["filled", "small"]}>settings</Icon>
      <Icon variant={["medium"]}>settings</Icon>
      <Icon variant={["medium", "filled"]}>settings</Icon>
      <Icon variant={["large"]}>settings</Icon>
      <Icon variant={["filled", "large"]}>settings</Icon>

      <Icon variant={["primary", "small"]}>settings</Icon>
      <Icon variant={["primary", "filled", "small"]}>settings</Icon>
      <Icon variant={["primary", "medium"]}>settings</Icon>
      <Icon variant={["primary", "medium", "filled"]}>settings</Icon>
      <Icon variant={["primary", "large"]}>settings</Icon>
      <Icon variant={["primary", "filled", "large"]}>settings</Icon>

      <Icon variant={["error", "small"]}>settings</Icon>
      <Icon variant={["error", "filled", "small"]}>settings</Icon>
      <Icon variant={["error", "medium"]}>settings</Icon>
      <Icon variant={["error", "medium", "filled"]}>settings</Icon>
      <Icon variant={["error", "large"]}>settings</Icon>
      <Icon variant={["error", "filled", "large"]}>settings</Icon>
    </div>
  );
}
