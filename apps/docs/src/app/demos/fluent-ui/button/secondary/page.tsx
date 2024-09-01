import { BakaButton, BakaIcon } from "baka-ui";

export default function ButtonDemo() {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <BakaButton variant={"secondary"}>Text</BakaButton>
          <BakaButton variant={"secondary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton variant={["secondary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton hovered={true} variant={"secondary"}>
            Text
          </BakaButton>
          <BakaButton hovered={true} variant={"secondary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton hovered={true} variant={["secondary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton activated={true} variant={"secondary"}>
            Text
          </BakaButton>
          <BakaButton activated={true} variant={"secondary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton activated={true} variant={["secondary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton selected={true} variant={"secondary"}>
            Text
          </BakaButton>
          <BakaButton selected={true} variant={"secondary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton selected={true} variant={["secondary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton focused={true} variant={"secondary"}>
            Text
          </BakaButton>
          <BakaButton focused={true} variant={"secondary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton focused={true} variant={["secondary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton disabled={true} variant={"secondary"}>
            Text
          </BakaButton>
          <BakaButton disabled={true} variant={"secondary"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton disabled={true} variant={["secondary", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
      </div>
    </>
  );
}
