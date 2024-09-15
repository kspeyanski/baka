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
          <BakaButton state={{hover: true}} variant={"subtle"}>
            Text
          </BakaButton>
          <BakaButton state={{hover: true}} variant={"subtle"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton state={{hover: true}} variant={["subtle", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton state={{ pressed: true }} variant={"subtle"}>
            Text
          </BakaButton>
          <BakaButton state={{ pressed: true }} variant={"subtle"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton state={{ pressed: true }} variant={["subtle", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton state={{ selected: true }} variant={"subtle"}>
            Text
          </BakaButton>
          <BakaButton state={{ selected: true }} variant={"subtle"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton state={{ selected: true }} variant={["subtle", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton state={{ focus: true }} variant={"subtle"}>
            Text
          </BakaButton>
          <BakaButton state={{ focus: true }} variant={"subtle"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton state={{ focus: true }} variant={["subtle", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
        <div className="flex flex-col gap-4">
          <BakaButton disabled={true} state={{ disabled: true }} variant={"subtle"}>
            Text
          </BakaButton>
          <BakaButton disabled={true} state={{ disabled: true }} variant={"subtle"}>
            <BakaIcon></BakaIcon>
            Text
          </BakaButton>
          <BakaButton disabled={true} state={{ disabled: true }} variant={["subtle", "icon"]}>
            <BakaIcon></BakaIcon>
          </BakaButton>
        </div>
      </div>
    </>
  );
}
