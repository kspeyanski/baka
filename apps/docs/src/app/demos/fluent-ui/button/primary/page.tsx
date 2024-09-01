import { BakaButton, BakaIcon } from "baka-ui";

export default function ButtonDemo() {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <BakaButton variant={"primary"}>Text</BakaButton>
          <BakaButton variant={"primary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton variant={["primary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton hovered={true} variant={"primary"}>
            Text
          </BakaButton>
          <BakaButton hovered={true} variant={"primary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton hovered={true} variant={["primary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton activated={true} variant={"primary"}>
            Text
          </BakaButton>
          <BakaButton activated={true} variant={"primary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton activated={true} variant={["primary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton selected={true} variant={"primary"}>
            Text
          </BakaButton>
          <BakaButton selected={true} variant={"primary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton selected={true} variant={["primary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton focused={true} variant={"primary"}>
            Text
          </BakaButton>
          <BakaButton focused={true} variant={"primary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton focused={true} variant={["primary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton disabled={true} variant={"primary"}>
            Text
          </BakaButton>
          <BakaButton disabled={true} variant={"primary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton disabled={true} variant={["primary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
      </div>
    </>
  );
}
