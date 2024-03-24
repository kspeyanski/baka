import { BakaBadge, BakaNavigation, BakaNavigationItem, BakaIcon, BakaText } from "baka-ui";

export default async function Demo() {
  return (
    <BakaNavigation style={{ width: 400 }} variant={"bottom"}>
      <BakaNavigationItem selected={true}>
        <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        {true ? <BakaText>BakaText</BakaText> : null}
      </BakaNavigationItem>
      <BakaNavigationItem>
        <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        {true ? <BakaText>BakaText</BakaText> : null}
      </BakaNavigationItem>

      <BakaNavigationItem>
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
        {true ? <BakaText>BakaText</BakaText> : null}
      </BakaNavigationItem>
    </BakaNavigation>
  );
}
