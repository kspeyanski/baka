import { BakaButton, BakaIcon } from "baka-ui";

export default function ButtonDemo() {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <BakaButton variant={"outline"}>Text</BakaButton>
          <BakaButton variant={"outline"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton variant={["outline", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton hovered={true} variant={"outline"}>
            Text
          </BakaButton>
          <BakaButton hovered={true} variant={"outline"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton hovered={true} variant={["outline", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton activated={true} variant={"outline"}>
            Text
          </BakaButton>
          <BakaButton activated={true} variant={"outline"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton activated={true} variant={["outline", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton selected={true} variant={"outline"}>
            Text
          </BakaButton>
          <BakaButton selected={true} variant={"outline"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton selected={true} variant={["outline", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton focused={true} variant={"outline"}>
            Text
          </BakaButton>
          <BakaButton focused={true} variant={"outline"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton focused={true} variant={["outline", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton disabled={true} variant={"outline"}>
            Text
          </BakaButton>
          <BakaButton disabled={true} variant={"outline"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton disabled={true} variant={["outline", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
      </div>
    </>
  );
}
