import { BakaBar, BakaButton, BakaIcon } from "baka-ui";

export default async function Demo() {
  return (
    <BakaBar
      style={{
        width: 400,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      variant="bottom"
    >
      <div style={{ display: "flex", gap: 8 }}>
        {["circle", "change_history", "rectangle", "pentagon", "hexagon"].map((shape) => (
          <BakaButton variant={"icon"}>
            <BakaIcon>{shape}</BakaIcon>
          </BakaButton>
        ))}
      </div>
      {true ? (
        <BakaButton variant={["fab", "secondary"]}>
          <BakaIcon>add</BakaIcon>
        </BakaButton>
      ) : null}
    </BakaBar>
  );
}
