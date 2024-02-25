import {
  BakaBadge,
  BakaBottomNavigation,
  BakaBottomNavigationItem,
  BakaIcon,
  BakaLabel,
} from "baka-ui";

export default async function Demo() {
  return (
    <BakaBottomNavigation style={{ width: 400 }}>
      <BakaBottomNavigationItem selected={true}>
        <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
      </BakaBottomNavigationItem>
      <BakaBottomNavigationItem>
        <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
      </BakaBottomNavigationItem>

      <BakaBottomNavigationItem>
        <BakaIcon variant={"filled"}>
          fiber_manual_record
          <BakaBadge variant={"small"} style={{ position: "absolute", right: 16, top: 2 }} />
        </BakaIcon>
      </BakaBottomNavigationItem>
    </BakaBottomNavigation>
  );
}
