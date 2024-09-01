import { BakaText } from "baka-ui";

export default async function TextDemo() {
  return (
    <div className="flex flex-col gap-6 justify-center">
      {/* <BakaText variant={"display"}>Display</BakaText>
      <BakaText variant={"large-title"}>Large Title</BakaText>
      <BakaText variant={"title-1"}>Title 1</BakaText>
      <BakaText variant={"title-2"}>Title 2</BakaText>
      <BakaText variant={"title-3"}>Title 3</BakaText>
      <BakaText variant={"subtitle-2-stronger"}>Subtitle 2 Stronger</BakaText>
      <BakaText variant={"subtitle-2"}>Subtitle 2</BakaText>
      <BakaText variant={"subtitle-1-stronger"}>Subtitle 1 Stronger</BakaText>
      <BakaText variant={"subtitle-1"}>Subtitle 1</BakaText>
      <BakaText variant={"body-2"}>Body 2</BakaText>
      <BakaText variant={"body-1-stronger"}>Body 1 Stronger</BakaText>
      <BakaText variant={"body-1-strong"}>Body 1 Strong</BakaText>
      <BakaText variant={"body-1"}>Body 1</BakaText>
      <BakaText variant={"caption-1-stronger"}>Caption 1 Stronger</BakaText>
      <BakaText variant={"caption-1-strong"}>Caption 1 Strong</BakaText>
      <BakaText variant={"caption-1"}>Caption 1</BakaText>
      <BakaText variant={"caption-2-strong"}>Caption 2 Strong</BakaText>
      <BakaText variant={"caption-2"}>Caption 2</BakaText> */}
      <div className="flex flex-row gap-2">
        <BakaText variant={"link"} as="a">
          Link
        </BakaText>
        <BakaText variant={"link"} as="a" hovered>
          Link
        </BakaText>
        <BakaText variant={"link"} as="a" activated>
          Link
        </BakaText>
        <BakaText variant={"link"} as="a" focused>
          Link
        </BakaText>
        <BakaText variant={"link"} as="a" disabled>
          Link
        </BakaText>
      </div>
      <div className="flex flex-row gap-2">
        <BakaText variant={["link", "subtle"]} as="a">
          Link
        </BakaText>
        <BakaText variant={["link", "subtle"]} as="a" hovered>
          Link
        </BakaText>
        <BakaText variant={["link", "subtle"]} as="a" activated>
          Link
        </BakaText>
        <BakaText variant={["link", "subtle"]} as="a" focused>
          Link
        </BakaText>
        <BakaText variant={["link", "subtle"]} as="a" disabled>
          Link
        </BakaText>
      </div>
      <div className="flex flex-row py-1 gap-2 bg-brand-background-1">
        <BakaText variant={["link", "over-brand"]} as="a">
          Link
        </BakaText>
        <BakaText variant={["link", "over-brand"]} as="a" hovered>
          Link
        </BakaText>
        <BakaText variant={["link", "over-brand"]} as="a" activated>
          Link
        </BakaText>
        <BakaText variant={["link", "over-brand"]} as="a" focused>
          Link
        </BakaText>
        <BakaText variant={["link", "over-brand"]} as="a" disabled>
          Link
        </BakaText>
      </div>
    </div>
  );
}
