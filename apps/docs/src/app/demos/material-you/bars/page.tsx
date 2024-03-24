import { BakaButton, BakaIcon, BakaText, BakaBar } from "baka-ui";

export default async function Demo() {
  return (
    <>
      <BakaBar style={{ width: 404 }} variant="top">
        <BakaButton variant={"icon"}>
          <BakaIcon>menu</BakaIcon>
        </BakaButton>
        <BakaText variant="title-large" style={{ flexGrow: 1, textAlign: "center" }}>
          Product
        </BakaText>
        <BakaButton variant={"icon"}>
          <BakaIcon variant={"filled"}>account_circle</BakaIcon>
        </BakaButton>
      </BakaBar>
      <br />
      <br />
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
    </>
  );
}
