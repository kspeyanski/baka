import { BakaButton, BakaIcon } from "baka-ui";

export default function ButtonDemo() {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <BakaButton variant={"transparent"}>Text</BakaButton>
          <BakaButton variant={"transparent"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton variant={["transparent", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton hovered={true} variant={"transparent"}>
            Text
          </BakaButton>
          <BakaButton hovered={true} variant={"transparent"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton hovered={true} variant={["transparent", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton activated={true} variant={"transparent"}>
            Text
          </BakaButton>
          <BakaButton activated={true} variant={"transparent"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton activated={true} variant={["transparent", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton selected={true} variant={"transparent"}>
            Text
          </BakaButton>
          <BakaButton selected={true} variant={"transparent"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton selected={true} variant={["transparent", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton focused={true} variant={"transparent"}>
            Text
          </BakaButton>
          <BakaButton focused={true} variant={"transparent"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton focused={true} variant={["transparent", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton disabled={true} variant={"transparent"}>
            Text
          </BakaButton>
          <BakaButton disabled={true} variant={"transparent"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton disabled={true} variant={["transparent", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
      </div>
    </>
  );
}
