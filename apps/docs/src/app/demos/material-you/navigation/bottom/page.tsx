import { BakaBadge, BakaNavigation, BakaNavigationItem, BakaIcon, BakaLabel } from "baka-ui";

export default async function Demo() {
  return (
    <BakaNavigation style={{ width: 400 }} variant="bottom">
      <BakaNavigationItem selected={true}>
        <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
      </BakaNavigationItem>
      <BakaNavigationItem>
        <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
      </BakaNavigationItem>

      <BakaNavigationItem>
        <BakaIcon variant={"filled"}>
          fiber_manual_record
          <BakaBadge variant={"small"} style={{ position: "absolute", right: 16, top: 2 }} />
        </BakaIcon>
      </BakaNavigationItem>
    </BakaNavigation>
  );
}
