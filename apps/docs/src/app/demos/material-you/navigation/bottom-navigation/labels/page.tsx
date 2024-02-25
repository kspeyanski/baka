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
          {true ? <BakaLabel>BakaLabel</BakaLabel> : null}
        </BakaBottomNavigationItem>
        <BakaBottomNavigationItem>
          <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
          {true ? <BakaLabel>BakaLabel</BakaLabel> : null}
        </BakaBottomNavigationItem>
  
        <BakaBottomNavigationItem>
          <BakaIcon variant={"filled"}>
            fiber_manual_record
            {true ? (
              <BakaBadge variant={"single-digit"} style={{ position: "absolute", right: 16, top: 2 }}>
                3
              </BakaBadge>
            ) : (
              <BakaBadge variant={"small"} style={{ position: "absolute", right: 16, top: 2 }} />
            )}
          </BakaIcon>
          {true ? <BakaLabel>BakaLabel</BakaLabel> : null}
        </BakaBottomNavigationItem>
      </BakaBottomNavigation>
    );
  }
  