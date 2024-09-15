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
          <BakaButton state={{hover: true}} variant={"transparent"}>
            Text
          </BakaButton>
          <BakaButton state={{hover: true}} variant={"transparent"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton state={{hover: true}} variant={["transparent", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton state={{ pressed: true }} variant={"transparent"}>
            Text
          </BakaButton>
          <BakaButton state={{ pressed: true }} variant={"transparent"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton state={{ pressed: true }} variant={["transparent", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton state={{ selected: true }} variant={"transparent"}>
            Text
          </BakaButton>
          <BakaButton state={{ selected: true }} variant={"transparent"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton state={{ selected: true }} variant={["transparent", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton state={{ focus: true }} variant={"transparent"}>
            Text
          </BakaButton>
          <BakaButton state={{ focus: true }} variant={"transparent"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton state={{ focus: true }} variant={["transparent", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton disabled={true} state={{ disabled: true }} variant={"transparent"}>
            Text
          </BakaButton>
          <BakaButton disabled={true} state={{ disabled: true }} variant={"transparent"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton disabled={true} state={{ disabled: true }} variant={["transparent", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
      </div>
    </>
  );
}
