import { Text } from "baka-fluent-ui";

export default async function TextDemo() {
  return (
    <div className="flex flex-col gap-6 justify-center">
      <Text variant={"display"}>Display</Text>
      <Text variant={"large-title"}>Large Title</Text>
      <Text variant={"title-1"}>Title 1</Text>
      <Text variant={"title-2"}>Title 2</Text>
      <Text variant={"title-3"}>Title 3</Text>
      <Text variant={"subtitle-2-stronger"}>Subtitle 2 Stronger</Text>
      <Text variant={"subtitle-2"}>Subtitle 2</Text>
      <Text variant={"subtitle-1-stronger"}>Subtitle 1 Stronger</Text>
      <Text variant={"subtitle-1"}>Subtitle 1</Text>
      <Text variant={"body-2"}>Body 2</Text>
      <Text variant={"body-1-stronger"}>Body 1 Stronger</Text>
      <Text variant={"body-1-strong"}>Body 1 Strong</Text>
      <Text variant={"body-1"}>Body 1</Text>
      <Text variant={"caption-1-stronger"}>Caption 1 Stronger</Text>
      <Text variant={"caption-1-strong"}>Caption 1 Strong</Text>
      <Text variant={"caption-1"}>Caption 1</Text>
      <Text variant={"caption-2-strong"}>Caption 2 Strong</Text>
      <Text variant={"caption-2"}>Caption 2</Text>
    </div>
  );
}
