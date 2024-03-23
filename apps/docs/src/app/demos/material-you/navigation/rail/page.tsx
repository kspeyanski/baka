import { BakaNavigation, BakaButton, BakaIcon, BakaNavigationItem, BakaLabel } from "baka-ui";

export default function Navigation() {
  return (
    <BakaNavigation style={{ height: "calc(100vh - 100px)" }} variant={"rail"}>
      <div
        style={{
          display: "flex",
          gap: 4,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "stretch",
        }}
      >
        <BakaButton variant="icon">
          <BakaIcon>menu</BakaIcon>
        </BakaButton>
        {
          <BakaButton variant={["fab", "tertiary"]}>
            <BakaIcon>mode_edit</BakaIcon>
          </BakaButton>
        }
      </div>
      <div>
        <BakaNavigationItem selected={true}>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          <BakaLabel>BakaLabel</BakaLabel>
        </BakaNavigationItem>
        <BakaNavigationItem>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaNavigationItem>
        <BakaNavigationItem>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaNavigationItem>
        <BakaNavigationItem>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        </BakaNavigationItem>
      </div>
    </BakaNavigation>
  );
}
