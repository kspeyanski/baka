import { BakaBottomBar, BakaButton, BakaIcon, BakaText, BakaTopBar } from "baka-ui";

export default async function Demo() {
  return (
    <>
      <BakaTopBar style={{ width: 404 }}>
        <BakaButton variant={"icon"}>
          <BakaIcon>menu</BakaIcon>
        </BakaButton>
        <BakaText variant="title-large" style={{ flexGrow: 1, textAlign: "center" }}>
          Product
        </BakaText>
        <BakaButton variant={"icon"}>
          <BakaIcon variant={"filled"}>account_circle</BakaIcon>
        </BakaButton>
      </BakaTopBar>
      <br />
      <br />
      <BakaBottomBar style={{ width: 400, display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 8 }}>
          {["circle", "change_history", "rectangle", "pentagon", "hexagon"]
            .map((shape) => (
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
      </BakaBottomBar>
    </>
  );
}
