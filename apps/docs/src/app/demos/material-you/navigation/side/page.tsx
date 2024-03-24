import {
  BakaNavigation,
  BakaNavigationItem,
  BakaIcon,
  BakaText,
  BakaDivider,
} from "baka-ui";

export default async function () {
  return (
    <BakaNavigation style={{ width: 328 }} variant={"side"}>
      <div style={{ padding: "18px 16px" }}>
        <BakaText variant={"title-small"}>Title</BakaText>
      </div>
      <div style={{ padding: "18px 16px" }}>
        <BakaText variant={"title-small"}>Section header</BakaText>
      </div>
      <BakaNavigationItem selected={true}>
        <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        <BakaText>BakaText</BakaText>
        <BakaText>100+</BakaText>
      </BakaNavigationItem>
      <BakaNavigationItem>
        <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        <BakaText>BakaText</BakaText>
        <BakaText>100+</BakaText>
      </BakaNavigationItem>
      <BakaNavigationItem>
        <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        <BakaText>BakaText</BakaText>
        <BakaText>100+</BakaText>
      </BakaNavigationItem>
      <BakaDivider />
      <div style={{ padding: "18px 16px" }}>
        <BakaText variant={"title-small"}>Section header</BakaText>
      </div>
      <BakaNavigationItem>
        <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        <BakaText>BakaText</BakaText>
      </BakaNavigationItem>
      <BakaNavigationItem>
        <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        <BakaText>BakaText</BakaText>
      </BakaNavigationItem>
      <BakaNavigationItem>
        <BakaIcon variant={"filled"}>fiber_manual_record</BakaIcon>
        <BakaText>BakaText</BakaText>
      </BakaNavigationItem>
    </BakaNavigation>
  );
}
