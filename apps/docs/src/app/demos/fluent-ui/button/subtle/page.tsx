import { BakaButton, BakaIcon } from "baka-ui";

export default function ButtonDemo() {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <BakaButton variant={"subtle"}>Text</BakaButton>
          <BakaButton variant={"subtle"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton variant={["subtle", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton hovered={true} variant={"subtle"}>
            Text
          </BakaButton>
          <BakaButton hovered={true} variant={"subtle"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton hovered={true} variant={["subtle", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton activated={true} variant={"subtle"}>
            Text
          </BakaButton>
          <BakaButton activated={true} variant={"subtle"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton activated={true} variant={["subtle", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton selected={true} variant={"subtle"}>
            Text
          </BakaButton>
          <BakaButton selected={true} variant={"subtle"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton selected={true} variant={["subtle", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton focused={true} variant={"subtle"}>
            Text
          </BakaButton>
          <BakaButton focused={true} variant={"subtle"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton focused={true} variant={["subtle", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton disabled={true} variant={"subtle"}>
            Text
          </BakaButton>
          <BakaButton disabled={true} variant={"subtle"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton disabled={true} variant={["subtle", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
      </div>
    </>
  );
}
